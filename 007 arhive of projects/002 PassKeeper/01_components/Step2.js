import React from 'react';
import CryptoJS from 'crypto-js';
import {load,save,encrypt,decrypt} from '../utils/utils.js';
import './Step2.scss';
import Modal from './Modal';

class Step2 extends React.PureComponent {
    state={
        disabled: false, 
        textInfo: "",
        text:"",
        modal: false,
    };
    save1=()=>{
        let data = "1234"+this.state.text;
        this.setState({textInfo:'Dont close app, file saving', disabled:true},()=>{
            setTimeout(()=>{
                this.save2(data);
            },500)
            
        })

        
    };
    save2=(data)=>{
        let {hashName,mess,pass,keySize,iter,salt,iv,salt2str,iv2str} = this.props;
        let encr = encrypt(data,pass,keySize,iter,salt,iv,salt2str,iv2str);
        save(hashName,JSON.parse(salt),JSON.parse(iv),encr,keySize,iter,salt2str,iv2str);
        console.log('SAVED');
        this.setState({disabled:true,textInfo:'saved'});
    }

    componentDidUpdate(prevProps){
        if(prevProps.s!==this.props.s){
            this.setState({text:this.props.mess.slice(4)})
        }
    }
    componentDidMount() { 
        this.setState({text:this.props.mess.slice(4)})
    }
    changePass=()=>{
        console.log('change');
        this.setState({modal:'pass'})
    }
    
  	render() {
        let {hashName,mess,pass,keySize,iter,salt,iv,salt2str,iv2str} = this.props;
        let {disabled, modal} = this.state;
        // !!!!нужно сделать title данные сохранены и disable input & textarea
		return (
			<div className="Step2">
                <div className="buttons">
                    <input disabled={disabled} onClick={this.save1} type="button" value={'save'}/>
                    <input disabled={disabled} onClick={this.changePass} type="button" value={'change pass'}/>
                </div>
                <div className="textInfo">{this.state.textInfo}</div>
                <div className="textareaWrap"><textarea disabled={disabled} value={this.state.text} onChange={(e)=>this.setState({text:e.target.value})}></textarea></div>
                {modal&&<Modal type={modal} cbClose={()=>{this.setState({modal:false})}}/>}
            </div>
		);
  	}
}
export default Step2;
