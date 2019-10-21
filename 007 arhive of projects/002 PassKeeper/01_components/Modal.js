import React from 'react';
import './Modal.scss';
import {load,save,encrypt,decrypt,simpleEncr,simpleDecr} from '../utils/utils.js';

class Modal extends React.PureComponent {
    state={
        //pass
        prevPass:'',
        newPass:'',
        newPassConfirm:'',
        message: '',

    };
    //pass
    changePass1=()=>{
        let {prevPass, newPass, newPassConfirm} = this.state;
        //TODO
        //проверяем чтобы поля небыли пустыми
        if(prevPass===''||newPass===''||newPassConfirm===''){
            this.setState({message:"fields mustn't be empty"});
        }
        //чтобы пароли совпадали
        else if(newPass!==newPassConfirm){
            this.setState({message:"passwords don't match"});
        }
        //проверяем старый хэш
        else{
            this.changePass2();
        }
       
    }
    changePass2=()=>{
        let data = load(this.props.hashName);
        let out = decrypt(data.encrypt,this.state.prevPass,data.keySize,data.iter);

        //если не правильный пароль
        if(out.length===0){
            this.setState({message:"current password incorrect"});
            
        }
        //если пароль правильный
        else{
            //проверяем старый хэш
            //перешифруем данные
            console.log('---старый пароль правильный!',this.state.newPass);
            this.props.cbClose();
            this.props.changePass(this.state.newPass)

        } 

    }
    renderContent=(type)=>{
        if(type==='pass'){
            return <div>
                <div className='label'>current password:</div>
                <div><input type="password" onChange={(e)=>this.setState({prevPass:e.target.value})} value={this.state.prevPass}/></div>
                <br/>
                <div className='label'>new password:</div>
                <div><input type="password" onChange={(e)=>this.setState({newPass:e.target.value})} value={this.state.newPass}/></div>
                <br/>
                <div className='label'>confirm password:</div>
                <div><input type="password" onChange={(e)=>this.setState({newPassConfirm:e.target.value})} value={this.state.newPassConfirm}/></div>
            </div>
        }
        else if(type==='export'){
            let result = "";
            let e = this.props.hashName;

            let data={};

            data.salt=localStorage.getItem(e+"1");
            data.iv=localStorage.getItem(e+"2");
            data.encrypt=localStorage.getItem(e+"3");
            data.keySize=localStorage.getItem(e+"4");  //есть в Page_Main
            data.iter=localStorage.getItem(e+"5"); //есть в Page_Main
            data.salt2str=localStorage.getItem(e+"6");
            data.iv2str=localStorage.getItem(e+"7");
            
            //здесь шифруем хэш
            console.log('---data',JSON.stringify(data));
            let c = JSON.stringify(data);
            let enc = simpleEncr(c);
            console.log('---enc',enc);
            //побитовое смещение
            //шафл по формуле
            //Пробуем еще какоенибудь шифрование из crypt js
            
            //TODO  --сделать кнопку edit - потом save
            return <div className="textareaWrap">
                <textarea disabled value={result}/>
            </div>
        }
    }
    renderBtns=(type)=>{
        if(type==='pass'){
            return <button onClick={this.changePass1}>change pass</button>
        }
    }
    
  	render() {
        let {type, cbClose} = this.props;
        
		return (
			<div className="Modal">
                <div className={'dialog'}>
                    <div className={'btns'}>
                        {this.renderBtns(type)}
                        <button onClick={cbClose}>cancel</button>
                    </div>
                    <div className={'message'}>{this.state.message}</div>
                    <div className={'content'}>{this.renderContent(type)}</div>

                </div>
            </div>
		);
  	}
}
export default Modal;
