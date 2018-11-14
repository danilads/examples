import React,{Fragment} from 'react';
import {connect} from "react-redux";
import {load} from "../redux/actions";
import { Control, Form, LocalForm ,actions} from 'react-redux-form';
import store from '../redux/store'

class Block_MainPage extends React.PureComponent {
	
	run=(val)=>{
		// Do anything you want with the form value
		console.log(val);
	}
	dispFucn=()=>{
		console.log('---1', store);
		store.dispatch(actions.change('forms.someForm[1].type', 'mobile'))
	}
  	render() {
		  console.log(this.props.reducer);
		return (
			<Fragment>
				<Form model="forms.user1" onSubmit={(user) => this.run(user)}>
					<label htmlFor="forms.user1.firstName">First name:</label>
					<Control.text model="forms.user1.firstName" id="forms.user1.firstName" />

					<label htmlFor="forms.user1.lastName">Last name:</label>
					<Control.text model="forms.user1.lastName" id="forms.user1.lastName" />

					<button type="submit">
					Finish registration!
					</button>
				</Form>

				{/*Это форма которая не записывает в redux данные, но читает из него*/}
				<LocalForm model="forms.user2" onSubmit={(val) => this.run(val)}>
					<Control.text model="forms.user2.username" />
					<Control.text model="forms.user2.password" />
					<button>Submit!</button>
				</LocalForm>

				<Form model="forms.user3" onSubmit={(user) => this.run(user)}>
					<label htmlFor="forms.user3.firstName">First name:</label>
					<Control.text model="forms.user3.firstName" id="forms.user3.firstName" />

					<label htmlFor="forms.user3.lastName">Last name:</label>
					<Control.text model="forms.user3.lastName" id="forms.user3.lastName" />

					<button type="submit">
					Finish registration!
					</button>
				</Form>

				<input type="button" onClick={this.dispFucn} value="dispatch"/>
			</Fragment>
		);

  	}

}


export default connect((state) => ({
	reducer: state
}),
{load})(Block_MainPage);