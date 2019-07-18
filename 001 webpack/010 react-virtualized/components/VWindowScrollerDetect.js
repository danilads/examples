import React,{Fragment} from 'react';

import { List, WindowScroller } from 'react-virtualized';

import ReactResizeDetector from 'react-resize-detector';

class VWindowScrollerDetect extends React.PureComponent {
	
	state = {
		arr:["э0","э1","э2","э3","э4","э5","э6","э7","э8","э10","э11","э12","э13","э14","э15","э16","э17","э18","э20","э21","э22","э23","э24","э25","э26","э27","э28","э29","э30","э31","э32","э33","э34","э35","э36","э37","э38","э39","э40"],
		height: 0,
		width: 0,
	};
	rowRenderer=(obj)=>{
		return(
			<div key={obj.index} style={obj.style} >{this.state.arr[obj.index]}</div>
		  )
	}
	onResize = (e1,e2) => {
		this.setState({width:e1, height:e2})
	};

  	render() {
		  
		let {width, height} = this.state;
		return (
			<div>
				{/* rowHeight в пикселях !должна совпадать с блоком */}

				<WindowScroller>
					{({ height, isScrolling, onChildScroll, scrollTop }) => (
					<List
						autoHeight
						width={width}
						height={height}
						isScrolling={isScrolling}
						onScroll={onChildScroll}
						rowCount={this.state.arr.length}
						rowHeight={22}
						rowRenderer={this.rowRenderer}
						scrollTop={scrollTop}
						
					/>
					)}
				</WindowScroller>
				 <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />
			</div>
		);

  	}

}



export default VWindowScrollerDetect;
