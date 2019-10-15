import React from 'react';
import './Modal.scss';

class Modal extends React.PureComponent {
    state={
        //pass
        prevPass:'',
        currPass:'',
        currPassConfirm:'',
        message: '',

    };
    //pass
    changePass1=()=>{
        let {prevPass, currPass, currPassConfirm} = this.state;
        //TODO
        //проверяем чтобы поля небыли пустыми
        if(prevPass===''||currPass===''||currPassConfirm===''){
            this.setState({message:"fields mustn't be empty"});
        }
        //чтобы пароли совпадали
        else if(currPass!==currPassConfirm){
            this.setState({message:"passwords don't match"});
        }
        //проверяем старый хэш
        else{
            this.changePass2();
        }
       
    }
    changePass2=()=>{
        //проверяем старый хэш
         //перешифруем данные
    }
    renderContent=(type)=>{
        if(type==='pass'){
            return <div>
                <div className='label'>current password:</div>
                <div><input type="password" onChange={(e)=>this.setState({prevPass:e.target.value})} value={this.state.prevPass}/></div>
                <br/>
                <div className='label'>new password:</div>
                <div><input type="password" onChange={(e)=>this.setState({currPass:e.target.value})} value={this.state.currPass}/></div>
                <br/>
                <div className='label'>confirm password:</div>
                <div><input type="password" onChange={(e)=>this.setState({currPassConfirm:e.target.value})} value={this.state.currPassConfirm}/></div>
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
