import React,{Fragment} from 'react';

import AntdMenuScroll from './AntdMenuScroll';

import AntdTable1scrollAndPaginataion from './AntdTable1scrollAndPaginataion';
import AntdTable2withCheckboxClicks from './AntdTable2withCheckboxClicks';
import AntdTable3resize from './AntdTable3resize';
import AntdTable4ellipsisWordWrap from './AntdTable4ellipsisWordWrap';
import AntdTable5attachment from './AntdTable5attachment';
import AntdTable6sorting from './AntdTable6sorting';
import AntdTable7filter from './AntdTable7filter';
import AntdTable8outerFilter from './AntdTable8outerFilter';
import AntdTable9fixed from './AntdTable9fixedSetDefSize';
import AntdTable10drag from './AntdTable10drag';
import AntdTable11SearchCustomMenu from './AntdTable11SearchCustomMenu';
import AntdTable12finExceptCustomMenu from './AntdTable12finExceptCustomMenu';





class Block_MainPage extends React.PureComponent {
	state={
		pos:8
	}
	
  	render() {
		return (
			<div className={"Block_Filter"}>
				<button style={this.state.pos===0?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:0});
				}}>AntdMenuScroll</button>

				<button style={this.state.pos===1?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:1});
				}}>AntdTable1scrollAndPaginataion</button>
				
				<button style={this.state.pos===2?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:2});
				}}>AntdTable2withCheckboxClicks</button>

				<button style={this.state.pos===3?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:3});
				}}>AntdTable3resize</button>

				<button style={this.state.pos===4?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:4});
				}}>AntdTable4ellipsisWordWrap</button>
				
				<button style={this.state.pos===5?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:5});
				}}>AntdTable5attachment</button>

				<button style={this.state.pos===6?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:6});
				}}>AntdTable6sorting</button>

				<button style={this.state.pos===7?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:7});
				}}>AntdTable7filter</button>

				<button style={this.state.pos===8?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:8});
				}}>AntdTable8outerFilter</button>

				<button style={this.state.pos===9?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:9});
				}}>AntdTable9fixed</button>

				<button style={this.state.pos===10?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:10});
				}}>AntdTable10drag</button>

				<button style={this.state.pos===11?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:11});
				}}>AntdTable11SearchCustomMenu</button>

				<button style={this.state.pos===12?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:12});
				}}>AntdTable12finExceptCustomMenu</button>

				
				

				<button style={this.state.pos===1111?{backgroundColor: 'wheat'}:{}} onClick={()=>{
					this.setState({pos:1111});
				}}>Modal</button>

				{this.state.pos===0&&<AntdMenuScroll/>}
				{this.state.pos===1&&<AntdTable1scrollAndPaginataion/>}
				{this.state.pos===2&&<AntdTable2withCheckboxClicks/>}
				{this.state.pos===3&&<AntdTable3resize/>}
				{this.state.pos===4&&<AntdTable4ellipsisWordWrap/>}
				{this.state.pos===5&&<AntdTable5attachment/>}
				{this.state.pos===6&&<AntdTable6sorting/>}
				{this.state.pos===7&&<AntdTable7filter/>}
				{this.state.pos===8&&<AntdTable8outerFilter/>}
				{this.state.pos===9&&<AntdTable9fixed/>}
				{this.state.pos===10&&<AntdTable10drag/>}
				{this.state.pos===11&&<AntdTable11SearchCustomMenu/>}
				{this.state.pos===12&&<AntdTable12finExceptCustomMenu/>}
				
				
			
				
			</div>
		);

  	}

}



export default Block_MainPage;
