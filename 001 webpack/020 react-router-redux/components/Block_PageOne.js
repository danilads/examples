import React from 'react';
import {connect} from "react-redux";
import { push } from "react-router-redux";

class Block_PageOne extends React.PureComponent {
	

  	render() {
		
		return (
			<div>
				<div>PAGE ONE</div>
                <div onClick={this.props.goto}>go to => PAGE MAIN</div>
			</div>
		);

  	}

}


export default connect(null,
(dispatch)=>{
	return{
		goto: ()=> {
			console.log('---gogogo')
			dispatch(push('/'))
		}
	}
})(Block_PageOne);