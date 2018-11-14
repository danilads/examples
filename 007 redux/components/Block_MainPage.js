import React from 'react';
import {connect} from "react-redux";
import {load} from "../redux/actions";


class Block_MainPage extends React.PureComponent {
	
	state = {
		
	};
	run=()=>{
		this.props.load();
	}
  	render() {
		
		return (
			<div>
				<input type="button" value="getItems" onClick={this.run}/>
			</div>
		);

  	}

}


export default connect((state) => ({
	reducer: state.reducer
}),
{load})(Block_MainPage);