import React,{Fragment} from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css';
import './TableStyleFix.scss';

class Table1 extends React.PureComponent {
	state={
		selected: '',
		doubleClickTimeStamp: 0,
		columns:[
			{
				Header: props => <input style={{float: 'left'}} type={'checkbox'}/>,
				accessor: 'checkbox',
				sortable: false,
       			filterable: false,
				resizable:false,
				width: 50,
				
			},
			{
				Header: props => <div onClick={this.setFixed}>Name(setFixed)</div>,
				accessor: 'name', // String-based value accessors!
				width: 150,
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

	}
	setFixed=(e)=>{
		e.preventDefault();
		e.stopPropagation();
		console.log('click')
		this.setState({columns:this.state.columns.map((it,ind)=>{
			if(ind===1){
				return {...it, fixed:'left'}
			}
			return it;
		})})
	};
  	render() {
		const data = [{
			name: <div>
					<div>Tanner</div>
					<div>Linsley</div>
				</div>,
			age: 32,
			friend: {
				name: 'Jason Maurer',
				age: 23,
			},
			checkbox: <input type={'checkbox'} onClick={e=>{
				e.preventDefault();
				e.stopPropagation();
				console.log('---e',e);
			}}/>
		}];
		for(let i=0;i<20;i++){

			data.push({
				name: 'Tanner Linsley',
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
		
	
		  return <div>
				<ReactTable
					className={'ReactTable'}
					data={data}
					columns={this.state.columns}
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
