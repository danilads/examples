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
		console.log(data);
		return (
			<div className="Position" onClick={this.modal}>
				<div className="News">
					<div className="title">{data.title}</div>
					<div className="desc">{data.feedlabel}</div>
				</div>
			</div>		
		);

  	}

}



export default connect((state) => ({
	
}),
{modalOpen,modalClose})(Position_News);