import React,{Fragment} from 'react';

import Table1 from './Table1';
import Table2virt from './Table2virt';
import Table3fixedCol from './Table3fixedCol';




class Block_MainPage extends React.PureComponent {
	state={
		pos:1
	}
	
  	render() {
		return (
			<div className={"Block_Filter"}>
				<button onClick={()=>{
					this.setState({pos:1});
				}}>Table1</button>
				<button onClick={()=>{
					this.setState({pos:2});
				}}>Table2virt</button>
				<button onClick={()=>{
					this.setState({pos:3});
				}}>Table3fixedCol</button>


				{this.state.pos===1&&<Table1/>}
				{this.state.pos===2&&<Table2virt/>}
				{this.state.pos===3&&<Table3fixedCol/>}
			
			
				
			</div>
		);

  	}

}



export default Block_MainPage;
