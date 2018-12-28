import React from 'react';

import './Position.scss';
import {connect} from "react-redux";
import {modalOpen,modalClose} from "../redux/actions";
class Position_Items extends React.PureComponent {
	
	state = {
		
	};
	modal=()=>{
		this.props.modalOpen({type:'I',name:this.props.data.dname,data:this.props.data});
	}
	_renderDescr=(e)=>{
		return "Cost: "+e.cost+" gold"
	}
  	render() {
		let {data} = this.props;
		//console.log('render heroes');
		return (
			<div className="Position" onClick={this.modal}>
				<div className="HeroesItems">
					<img className="avatar" src={"./04_images/items/"+data.img.slice(0, -2)}/>
					<div className="title">{data.dname}</div>
					<div className="atk">{this._renderDescr(data)}</div>
					<div className="tooltip"><div>{data.lore}</div></div>
				</div>
			</div>		
		);

  	}

}



export default connect((state) => ({
	
}),
{modalOpen,modalClose})(Position_Items);