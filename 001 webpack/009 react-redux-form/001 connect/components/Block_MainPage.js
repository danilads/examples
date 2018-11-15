import React from 'react';
import {connect} from "react-redux";
import {load} from "../redux/actions";

import { Control, Form } from 'react-redux-form';


class Block_MainPage extends React.PureComponent {
	
	run=(val)=>{
		// Do anything you want with the form value
		console.log(val);
	}
  	render() {
		  console.log(this.props.reducer);
		return (
			<Form model="forms.user" onSubmit={(val) => this.run(val)}>
				<label>Your name?</label>
				<Control.text model=".name" />
				<button>Submit!</button>
			</Form>
		);

  	}

}


export default connect((state) => ({
	reducer: state.reducer
}),
{load})(Block_MainPage);