import React from 'react';

import './Page_Main.scss';

import Step1 from './Step1';
class Page_Main extends React.PureComponent {
	state = {
		hashName: 'StorageHash2',
		isFirstRun: true,

	
		field: "text:",
		isPassRight: false,
		errorEmpty: false,
		step:0,

	};
	componentDidMount() { 
		// первый запуск
		if(localStorage.getItem(this.state.hashName)===null){
			this.setState({isFirstRun:true})
		}
		// не первый запуск
		else{
			this.setState({isFirstRun:false})
		}
	}
  	render() {
		let {step,isFirstRun} = this.state;
		return (
			
			<div className="Page_Main">
				{/* меню ввода пароля */}
				{step===0&&<Step1 isFirstSt={isFirstRun}/>}
			</div>
		);
  	}
}
export default Page_Main;
