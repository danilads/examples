import React,{Fragment} from 'react';
import ReactTable from 'react-table'
import withFixedColumns from "react-table-hoc-fixed-columns";

import 'react-table/react-table.css';
import 'react-table-hoc-fixed-columns/lib/styles.css'; // important: this line must be placed after react-table css import
import './TableStyleFix.scss';

const ReactTableFixedColumns = withFixedColumns(ReactTable);

class Table1 extends React.PureComponent {
	state={
		selected: '',
		doubleClickTimeStamp: 0

	}
  	render() {
		const data = [];
		for(let i=0;i<21;i++){

			data.push({
				name: <div>
						<div>Tanner</div>
						<div>Linsley</div>
					</div>,
				age: i,
				friend: {
					name: 'Jason Maurer',
					age: 23,
				},
				checkbox: <input type={'checkbox'} onClick={e=>{
					e.preventDefault();
					e.stopPropagation();
					console.log('---e',i);
				}}/>
			})
		}
		
		 
		  const columns = [
			  {
				Header: (props) => {
					return <input style={{float: 'left'}} type={'checkbox'}/>
				},
				accessor: 'checkbox',
				sortable: false,
       			filterable: false,
				resizable:false,
				width: 50
			  },
			{
			Header: 'Name',
			accessor: 'name', // String-based value accessors!
			width: 150
		  }, {
			Header: 'Age',
			accessor: 'age',
			width: 150,
			Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
		  }, {
			id: 'friendName', // Required because our accessor is not a string
			Header: 'Friend Name',
			width: 150,
			accessor: d => d.friend.name // Custom value accessors!
		  },
		  {
			Header: props => <span>Friend Age</span>, // Custom header components!
			accessor: 'friend.age',
			width: 150
		  }]
		 
		  return <div>
				<ReactTableFixedColumns
					className={'ReactTable'}
					data={data}
					columns={columns}
					minRows={1} //если перешли на последнюю страницу - не будут отображаться "фантомные" пустые строки
					defaultPageSize={20}
					
					noDataText="Oh Noes!" //если нету данных
					showPagination ={data.length>20} //можно убрать если данных мало
					style={{
						width: "500px",
						height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
					}}
				
					previousText={<span>пред</span>}
					nextText={<span>след</span>}
					
					//выделение
					getTrProps={(state, rowInfo) => {
						//double click
						
						if (rowInfo && rowInfo.row) {
						  return {
							onClick: (e) => {
								console.log('---e',e);
								console.log('---rowInfo',rowInfo);
								console.log('---state',state);
								//if double click	
								if(this.state.doubleClickTimeStamp+400>performance.now() && rowInfo.index === this.state.selected){
									console.log('---double click');
								}
								else{
									console.log('---one click');
								}
								
								this.setState({selected: rowInfo.index, doubleClickTimeStamp:performance.now()})
							},
							style: {
							  background: rowInfo.index === this.state.selected ? '#00afec' : 'white',
							  color: rowInfo.index === this.state.selected ? 'white' : 'black'
							}
						  }
						}else{
						  return {}
						}
					  }
					}

					
				/>
		  </div>

  	}

}



export default Table1;
