import React, {Fragment ,PureComponent} from 'react';


import ValidComponent from './ValidComponent';
import InputText from './InputText';
import RadioButton from './RadioButton';
import CheckBox from './CheckBox';

import {connect} from "react-redux";
import {load,save} from "../redux/actions";

class AaaMainPage extends PureComponent {
    
  	render() {
		return (
            <Fragment>
                <ValidComponent
                    component={InputText}
                    model="textField1"
                    validRules={"length<2"}
      
                />
                <ValidComponent
                    component={InputText}
                    model="textField2"
                    validRules={"length<2"}
                />
                <ValidComponent
                    component={CheckBox}
                    model="checkField"
                    validRules={""}
                />

                <ValidComponent
                    component={RadioButton}
                    model="radioField"
                    validRules={""}
                />

                
            </Fragment>
		);
  	}

}



export default connect((state) => ({
	reducer: state.reducer
}),
{load,save})(AaaMainPage);