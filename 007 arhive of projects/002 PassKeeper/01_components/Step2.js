import React from 'react';
import CryptoJS from 'crypto-js';
import {load,save,encrypt,decrypt} from '../utils/utils.js';
import './Step2.scss';

class Step2 extends React.PureComponent {
    state={
        text:"",
        saved: false,
    };
    save=()=>{
        let data = "1234"+this.state.text;
        let {hashName,mess,pass,keySize,iter,salt,iv,salt2str,iv2str} = this.props;

        let encr =  encrypt(data,pass,keySize,iter,salt,iv,salt2str,iv2str);
        save(hashName,JSON.parse(salt),JSON.parse(iv),encr,keySize,iter,salt2str,iv2str);
        console.log('SAVED');
        this.setState({saved:true});
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
        let {saved} = this.state;
        // !!!!нужно сделать title данные сохранены и disable input & textarea
		return (
			<div className="Step2">
                <div><textarea disabled={saved} value={this.state.text} onChange={(e)=>this.setState({text:e.target.value})}></textarea></div>
                <div><input disabled={saved} onClick={this.save} type="button" value="save"/></div>
			</div>
		);
  	}
}
export default Step2;
