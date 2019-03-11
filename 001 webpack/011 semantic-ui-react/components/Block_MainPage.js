import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import Pop from './Pop';
import Vis from './Vissibility';
import Mod from './Modal';
import {Visibility} from 'semantic-ui-react';


class Block_MainPage extends React.PureComponent {
	state={
		pos:0,
	}
	
  	render() {
		return (
			<div className={"Block_Filter"}>
				<button onClick={()=>{
					this.setState({pos:1});
				}}>Vissibility</button>
				<button onClick={()=>{
					this.setState({pos:2});
				}}>Popup</button>
				<button onClick={()=>{
					this.setState({pos:3});
				}}>Modal</button>

				{this.state.pos===1&&<Vis/>}
				{this.state.pos===2&&<Pop/>}
				{this.state.pos===3&&<Mod/>}
				
			</div>
		);

  	}

}



export default Block_MainPage;
