import React from 'react';

import './Position.scss';
import {connect} from "react-redux";
import {modalOpen,modalClose} from "../redux/actions";
class Position_News extends React.PureComponent {
	
	state = {
		
	};
	modal=()=>{
		this.props.modalOpen({type:'N',name:this.props.data.title,data:this.props.data});
	}
  	render() {
		let {data} = this.props;
		//console.log('render news');
		return (
			<div className="Position News" onClick={this.modal}>
				<div>{data.title}</div>
			</div>		
		);

  	}

}



export default connect((state) => ({
	
}),
{modalOpen,modalClose})(Position_News);