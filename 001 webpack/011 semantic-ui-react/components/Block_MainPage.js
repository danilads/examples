import React,{Fragment} from 'react';
import Filter from '../primitives/Filter';
import Pop from './Pop';
import {Visibility} from 'semantic-ui-react';


class Block_MainPage extends React.PureComponent {
	
	state = {
		content:[1,2,3,4,5,6,7,8,9,10]
	};
	showMore=()=>{
		console.log('show more');
		let anotherArr = [11,12,13,14,15,16,17,18,19,20]
		this.setState({content:this.state.content.concat(anotherArr)});
	};
  	render() {
		return (
			<div className={"Block_Filter"}>
				<Visibility
					onBottomVisible={()=>{this.showMore()}}
				>
					{this.state.content.map((it,ind)=>{
						return <div key={ind} style={{padding:"20px 0",border:'1px dashed gray'}}>{it}</div>
					})}
				</Visibility>
				<Pop/>
			</div>
		);

  	}

}



export default Block_MainPage;
