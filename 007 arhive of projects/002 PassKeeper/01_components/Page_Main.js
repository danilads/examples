import React from 'react';
import {load} from '../utils/utils.js';
import './Page_Main.scss';


import Step1 from './Step1';
import Step2 from './Step2';
class Page_Main extends React.PureComponent {
	state = {
		hashName: 'StorageHash23',
		keySize: 512,
		iter: 10000,
		pass:"",
		mess:"",
		salt:"",
		iv:"",
		salt2str:"",
		iv2str:"",

		isFirstRun: true,

		isPassRight: false,
		errorEmpty: false,
		step:1,

	};
	componentDidMount() { 
		// первый запуск
		if(load(this.state.hashName).encrypt===null){
			this.setState({isFirstRun:true})
		}
		// не первый запуск
		else{
			this.setState({isFirstRun:false})
		}
	}
	cbStep1ChangeStep=()=>{
		this.setState({step:2});
	};
	getData=(pass,mess,salt,iv,salt2str,iv2str)=>{
		this.setState({pass,mess,salt,iv,pass,salt2str,iv2str})
	};
	changePass=(e)=>{
		this.setState({pass:e});
	}
  	render() {
		let {step,isFirstRun,hashName,mess,keySize,iter,salt,iv,pass,salt2str,iv2str} = this.state;
	
		return (
			
			<div className="Page_Main">
				{/* меню ввода пароля */}
				{step===1&&<Step1 iter={this.state.iter} keySize={this.state.keySize} getData={this.getData} cbChangeStep={this.cbStep1ChangeStep} isFirstSt={isFirstRun} hash={load(hashName)} hashN={hashName}/>}
				{step===2&&<Step2 hashName={hashName} mess={mess} pass={pass} keySize={keySize} iter={iter} salt={salt} iv={iv} salt2str={salt2str} iv2str={iv2str} changePass={this.changePass}/>}

			</div>
		);
  	}
}
export default Page_Main;
