import React,{Fragment} from 'react';
import { List } from 'react-virtualized';

class VList extends React.PureComponent {
	state={
		list:[]
	};
	componentDidMount(){
		let list=[];
		for(let i=0;200>i;i++){
			list.push('Brian '+i);
		}
		this.setState({list:list});
	}


	rowRenderer =({
		key,         // Unique key within array of rows
		index,       // Index of row within collection
		isScrolling, // The List is currently being scrolled
		isVisible,   // This row is visible within the List (eg it is not an overscanned row)
		style        // Style object to be applied to row (to position it)
	  })=>{
		return <div
					key={key}
					style={style}
				>
					{this.state.list[index]}
				</div>
	} 
	  
  	render() {
		
		  return <div>
				
				<List
					width={300}
					height={300}
					rowCount={this.state.list.length}
					rowHeight={20}
					rowRenderer={this.rowRenderer}
				/>
		  </div>

  	}

}



export default VList;
