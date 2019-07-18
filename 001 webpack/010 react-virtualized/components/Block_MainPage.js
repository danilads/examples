import React,{Fragment} from 'react';

import VList from './VList';
import VListDetect from './VListDetect';
import VWindowScrollerDetect from './VWindowScrollerDetect';





class Block_MainPage extends React.PureComponent {
	state={
		pos:1
	}
	
  	render() {
		return (
			<div className={"Block_Filter"}>
				<button onClick={()=>{
					this.setState({pos:1});
				}}>VList</button>
				<button onClick={()=>{
					this.setState({pos:2});
				}}>VListDetect</button>
				<button onClick={()=>{
					this.setState({pos:3});
				}}>VWindowScrollerDetect</button>
			


				{this.state.pos===1&&<VList/>}
				{this.state.pos===2&&<VListDetect/>}
				{this.state.pos===3&&<VWindowScrollerDetect/>}

			
			
				
			</div>
		);

  	}

}



export default Block_MainPage;
