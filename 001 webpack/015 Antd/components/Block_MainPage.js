import React,{Fragment} from 'react';

import AntdTable1 from './AntdTable1';
import AntdTable2 from './AntdTable2';
import AntdTable3 from './AntdTable3';
import AntdMenu from './AntdMenu';



class Block_MainPage extends React.PureComponent {
	state={
		pos:3
	}
	
  	render() {
		return (
			<div className={"Block_Filter"}>
				<button onClick={()=>{
					this.setState({pos:1});
				}}>AntdTable1</button>
				<button onClick={()=>{
					this.setState({pos:2});
				}}>AntdTable2</button>
				<button onClick={()=>{
					this.setState({pos:3});
				}}>AntdTable3</button>
				<button onClick={()=>{
					this.setState({pos:4});
				}}>AntdMenu</button>
				<button onClick={()=>{
					this.setState({pos:5});
				}}>Modal</button>

				{this.state.pos===1&&<AntdTable1/>}
				{this.state.pos===2&&<AntdTable2/>}
				{this.state.pos===3&&<AntdTable3/>}
				{this.state.pos===4&&<AntdMenu/>}
			
				
			</div>
		);

  	}

}



export default Block_MainPage;
