import React,{Fragment} from 'react';

import { Grid, List, ScrollSync } from 'react-virtualized'
import 'react-virtualized/styles.css'; // only needs to be imported once

class VScrollSync extends React.PureComponent {
	state={
		list1:[],
		list2:[[]]
	};
	componentDidMount(){
		let list1=[];
		for(let i=0;50>i;i++){
			list1.push('Brian '+i);
		}
		this.setState({list1:list1});


		let list2=[];
		for(let i=0;50>i;i++){
            list2.push([i,
                <div>David</div>,
                "John",Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()]);
		}
		this.setState({list2:list2});
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
					{this.state.list1[index]}
				</div>
	} 

	cellRenderer =({ columnIndex, key, rowIndex, style })=>{
        return (
            <div
              key={key}
              style={style}
            >
              {this.state.list2[rowIndex][columnIndex]}
            </div>
          ) 
	} 
	  
  	render() {
		
		  return <div>
				
				<ScrollSync>
        {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => (
          <div style={{display:'flex'}}>
            <div style={{overflow:'hidden'}}>
              <List
			  	style={{overflow: "hidden"}}
				onScroll={onScroll}
                scrollTop={scrollTop}
                width={500}
				height={300}
				rowCount={this.state.list1.length}
				rowHeight={30}
				rowRenderer={this.rowRenderer}
              />
            </div>
            <div>
              <Grid
			  	style={{paddingLeft: '300px', marginLeft: '-500px'}}
				onScroll={onScroll}
				scrollTop={scrollTop}
                cellRenderer={this.cellRenderer}
				columnCount={this.state.list2[0].length}
				columnWidth={150}
				height={300}
				rowCount={this.state.list2.length}
				rowHeight={30}
				width={300}
              />
            </div>
          </div>
        )}
      </ScrollSync>
		  </div>

  	}

}



export default VScrollSync;



