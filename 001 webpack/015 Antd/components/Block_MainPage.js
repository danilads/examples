import React,{Fragment} from 'react';

import AntdTable from './AntdTable';



class Block_MainPage extends React.PureComponent {
	state={
		pos:1,
	}
	
  	render() {
		return (
			<div className={"Block_Filter"}>
				<button onClick={()=>{
					this.setState({pos:1});
				}}>AntdTable</button>
				<button onClick={()=>{
					this.setState({pos:2});
				}}>Popup</button>
				<button onClick={()=>{
					this.setState({pos:3});
				}}>Modal</button>

				{this.state.pos===1&&<AntdTable/>}
			
				
			</div>
		);

  	}

}



export default Block_MainPage;
