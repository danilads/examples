import React from 'react';
import CryptoJS from 'crypto-js';
import {load,save,encrypt,decrypt} from '../utils/utils.js';
import './Step1.scss';

class Step1 extends React.PureComponent {
    state={
        pass:"",
        isPassWrong:false,
    };
    submit=(e)=>{
        //первый вход
        if(e){
            if(this.state.pass===""){
                // !!!!нужно сделать title

            }
            else{
                let salt = CryptoJS.lib.WordArray.random(128/8);
                let iv = CryptoJS.lib.WordArray.random(128/8);
                let salt2str = salt.toString();
                let iv2str = iv.toString();
                let keyS = this.props.keySize;
                let iter = this.props.iter;
                let encr = encrypt("1234",this.state.pass,512,10000,JSON.stringify(salt),JSON.stringify(iv),salt2str,iv2str);
                save(this.props.hashN,salt,iv,encr,keyS,iter,salt2str,iv2str);

                // !!!!нужно сделать переключение на степ 2
                // this.props.getData(this.state.pass,out,data.salt,data.iv,data.salt2str,data.salt2iv);
                // this.props.cbChangeStep();
            }
         
        }
        //не первый вход
        else{
            let data = load(this.props.hashN);
            console.log("data",data);

            let out = decrypt(data.encrypt,this.state.pass,data.keySize,data.iter);

            //если не правильный пароль
            if(out.length===0){
                this.setState({isPassWrong: true});
            }
            //если пароль правильный
            else{
                this.props.getData(this.state.pass,out,data.salt,data.iv,data.salt2str,data.iv2str);
                this.props.cbChangeStep();
            }   

        }
    };

    _renderTitle=(e)=>{
        if(e&&!this.state.isPassWrong){
            return <div>первый вход (введите пароль)</div>
        }
        else if(!e&&!this.state.isPassWrong){
            return <div>не первый вход (введите пароль)</div>
        }
        else if(this.state.isPassWrong){
            return <div>неверный пароль (введите пароль)</div>
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
