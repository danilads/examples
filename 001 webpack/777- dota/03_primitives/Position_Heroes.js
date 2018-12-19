import React from 'react';

import './Position.scss';

import {connect} from "react-redux";
import {modalOpen,modalClose} from "../redux/actions";
class Position_Heroes extends React.PureComponent {
	
	
	modal=()=>{
		 
		this.props.modalOpen({type:'H',data:this.props.data});
	}
  	render() {
		let {data} = this.props;
		return (
			<React.Fragment>
				<div className="Position Heroes" onClick={this.modal}>
					<div>{data.name}</div>
				</div>
			</React.Fragment>	
		);

  	}

}



export default connect((state) => ({
	
}),
{modalOpen,modalClose})(Position_Heroes);