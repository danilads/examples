import React from 'react';
import CryptoJS from 'crypto-js';
import {load,save,encrypt,decrypt} from '../utils/utils.js';
import './Step2.scss';

class Step2 extends React.PureComponent {
    state={
        text:""
    };
    save=()=>{
        let data = "1234"+this.state.text;
        let {hashName,mess,pass,keySize,iter,salt,iv,salt2str,iv2str} = this.props;
        let encr =  encrypt(data,pass,keySize,iter,salt,iv,salt2str,iv2str);
        save(hashName,salt,iv,encr,keySize,iter,salt2str,iv2str);
    };

    componentDidUpdate(prevProps){
        if(prevProps.s!==this.props.s){
            this.setState({text:this.props.mess.slice(4)})
        }
    }
    componentDidMount() { 
        this.setState({text:this.props.mess.slice(4)})
    }
  	render() {
        let {hashName,mess,pass,keySize,iter,salt,iv,salt2str,iv2str} = this.props;
        let {} = this.state;
        // !!!!нужно сделать title данные сохранены
		return (
			<div className="Step2">
                здесь выводим дату
                <div>{hashName}</div>
                <div>{mess.slice(4)}</div>
                <div>{pass}</div>
                <div>{keySize}</div>
                <div>{iter}</div>
                <div>{salt}</div>
                <div>{iv}</div>
                <div>{salt2str}</div>
                <div>{iv2str}</div>
                <textarea value={this.state.text} onChange={(e)=>this.setState({text:e.target.value})}></textarea>
                <input onClick={this.save} type="button" value="save"/>
			</div>
		);
  	}
}
export default Step2;
