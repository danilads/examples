import React,{Fragment} from 'react';

import Table1 from './Table1';
import Table2virt from './Table2virt';
import Menu1 from './Menu1';





class Block_MainPage extends React.PureComponent {
	state={
		pos:3
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
				}}>Menu1</button>
		


				{this.state.pos===1&&<Table1/>}
				{this.state.pos===2&&<Table2virt/>}
				{this.state.pos===3&&<Menu1/>}
		
			
			
				
			</div>
		);

  	}

}



export default Block_MainPage;
