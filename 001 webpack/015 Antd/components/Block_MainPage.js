import React,{Fragment} from 'react';

import AntdTable1scroll from './AntdTable1scroll';
import AntdTable2withCheckbox from './AntdTable2withCheckbox';
import AntdTable3resize from './AntdTable3resize';
import AntdTable4ellipsisWordWrap from './AntdTable4ellipsisWordWrap';
import AntdTable5attachment from './AntdTable5attachment';
import AntdMenu from './AntdMenu';



class Block_MainPage extends React.PureComponent {
	state={
		pos:5
	}
	
  	render() {
		return (
			<div className={"Block_Filter"}>
				<button style={this.state.pos===0?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:0});
				}}>AntdMenu</button>

				<button style={this.state.pos===1?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:1});
				}}>AntdTable1scroll</button>
				
				<button style={this.state.pos===2?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:2});
				}}>AntdTable2withCheckbox</button>

				<button style={this.state.pos===3?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:3});
				}}>AntdTable3resize</button>

				<button style={this.state.pos===4?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:4});
				}}>AntdTable4ellipsisWordWrap</button>
				
				<button style={this.state.pos===5?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:5});
				}}>AntdTable5attachment</button>
				

				<button style={this.state.pos===1111?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:1111});
				}}>Modal</button>

				{this.state.pos===0&&<AntdMenu/>}
				{this.state.pos===1&&<AntdTable1scroll/>}
				{this.state.pos===2&&<AntdTable2withCheckbox/>}
				{this.state.pos===3&&<AntdTable3resize/>}
				{this.state.pos===4&&<AntdTable4ellipsisWordWrap/>}
				{this.state.pos===5&&<AntdTable5attachment/>}
				
			
				
			</div>
		);

  	}

}



export default Block_MainPage;
