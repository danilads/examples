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
    changePass=()=>{
        //TODO
        //проверяем чтобы поля небыли пустыми
        
        //чтобы пароли совпадали
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
            return <button onClick={this.changePass}>change pass</button>
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
