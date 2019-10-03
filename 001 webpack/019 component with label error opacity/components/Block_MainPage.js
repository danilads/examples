import React,{Fragment} from 'react';
import {IMaskInput} from 'react-imask';
import './Block_MainPage.scss';
import InputValidation from './InputValidation.js';

class Block_MainPage extends React.PureComponent {
	
  	render() {
		return (
			<div className={"Block_MainPage"}>
				<InputValidation/>
				<div style={{border:'1px dashed red'}}>some div</div>
			</div>
		);

  	}

}



export default Block_MainPage;
