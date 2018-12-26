import React from 'react';

import './Position.scss';

import {connect} from "react-redux";
import {modalOpen,modalClose} from "../redux/actions";
class Position_Heroes extends React.PureComponent {
	

	modal=()=>{
		this.props.modalOpen({type:'H',name:this.props.data.codeName,data:this.props.data});
	}
	_renderDescr=(e)=>{
	
		return "Hero type: "+e.atk_l+" / Roles: "+e.roles.map(it=>{
			return it+" "
		});
	}
  	render() {
		let {data} = this.props;
		console.log('--data',data);
		return (
			<React.Fragment>
				<div className="Position" onClick={this.modal}>
					<div className="Heroes">
						<div className={'imgWrap'}>
							<img className="avatar" src={"./04_images/heroes/"+data.codeName+".png"}/>
							<div className="tooltip"><div>{data.bio}</div></div>
						</div>
						<div className="title">{data.name}</div>
						<div className="atk">{this._renderDescr(data)}</div>

					</div>
				</div>
			</React.Fragment>	
		);

  	}

}



export default connect((state) => ({
	
}),
{modalOpen,modalClose})(Position_Heroes);