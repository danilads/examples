import React,{Fragment} from 'react';

import Menu1 from './Menu1';





class Block_MainPage extends React.PureComponent {
	state={
		pos:1
	} 
	
  	render() {
		return (
			<div className={"Block_Filter"}>
			
				<button onClick={()=>{
					this.setState({pos:1});
				}}>Menu1</button>
		


				{this.state.pos===1&&<Menu1/>}
		
			
			
				
			</div>
		);

  	}

}



export default Block_MainPage;
