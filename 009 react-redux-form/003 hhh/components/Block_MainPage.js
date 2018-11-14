import React from 'react';
import {connect} from "react-redux";
import {load} from "../redux/AC";

import { Control, Form, LocalForm } from 'react-redux-form';


class Block_MainPage extends React.PureComponent {
	
	run=(val)=>{
		// Do anything you want with the form value
		console.log(val);
	}
  	render() {
		  console.log(this.props.reducer);
		return (
			<LocalForm model="forms.user" onSubmit={(val) => this.run(val)}>
				<Control.text model=".username" />
				<Control.text model=".password" />
				<button>Submit!</button>
			</LocalForm>
		);

  	}

}


export default connect((state) => ({
	reducer: state.reducer
}),
{load})(Block_MainPage);