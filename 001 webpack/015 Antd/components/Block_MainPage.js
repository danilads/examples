import React,{Fragment} from 'react';

import AntdTable from './AntdTable';
import AntdMenu from './AntdMenu';



class Block_MainPage extends React.PureComponent {
	state={
		pos:2
	}
	
  	render() {
		return (
			<div className={"Block_Filter"}>
				<button onClick={()=>{
					this.setState({pos:1});
				}}>AntdTable</button>
				<button onClick={()=>{
					this.setState({pos:2});
				}}>AntdMenu</button>
				<button onClick={()=>{
					this.setState({pos:3});
				}}>Modal</button>

				{this.state.pos===1&&<AntdTable/>}
				{this.state.pos===2&&<AntdMenu/>}
			
				
			</div>
		);

  	}

}



export default Block_MainPage;
