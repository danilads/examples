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
  	render() {
		let {data} = this.props;
		//console.log('render heroes');
		return (
			<div className="Position Items" onClick={this.modal}>
				<div>{data.dname}</div>
				<div><img src={"./04_images/items/"+data.img.slice(0, -2)}/></div>
			</div>		
		);

  	}

}



export default connect((state) => ({
	
}),
{modalOpen,modalClose})(Position_Items);