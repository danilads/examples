import React from 'react';

import './Position.scss';

import {connect} from "react-redux";
import {modalOpen,modalClose} from "../redux/actions";
class Position_Heroes extends React.PureComponent {
	

	modal=()=>{
		this.props.modalOpen({type:'H',name:this.props.data.codeName,data:this.props.data});
	}

  	render() {
		let {data} = this.props;
		
		return (
			<React.Fragment>
				<div className="Position" onClick={this.modal}>
					<div className="Heroes">
						<img className="avatar" src={"./04_images/heroes/"+data.codeName+".png"}/>
						<div className="title">{data.name}</div>
						<div className="bio" dangerouslySetInnerHTML={{__html: data.bio}}/>
						<div className="skills">

						</div>
					</div>
				</div>
			</React.Fragment>	
		);

  	}

}



export default connect((state) => ({
	
}),
{modalOpen,modalClose})(Position_Heroes);