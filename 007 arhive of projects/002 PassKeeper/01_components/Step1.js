import React from 'react';

import {load} from '../utils/utils.js';
import './Step1.scss';

class Step1 extends React.PureComponent {
    state={
        pass:"",
    };
    submit=(e)=>{
        //первый вход
        if(e){
            //нужно создать соль и хранить ее в localStorage
            console.log('первый вход');
            load();
        }
        //не первый вход
        else{
            console.log('не первый вход');
        }
    };

    _renderTitle=(e)=>{
        if(e){
            return <div>первый вход (введите пароль)</div>
        }
        else{
            return <div>не первый вход (введите пароль)</div>
        }

    };
  	render() {
        let {isFirstSt} = this.props;
        let {pass} = this.state;
		return (
			
			<div className="Step1">
				<div>{this._renderTitle(isFirstSt)}</div>
                <div><input type="password" value={pass} onChange={(e)=>this.setState({pass:e.target.value})}/></div>
                <div><input type={"button"} onClick={()=>this.submit(isFirstSt)} value={"submit"}/></div>
			</div>
		);
  	}
}
export default Step1;
