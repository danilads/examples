import React,{Fragment} from 'react';

//import from npm
//import Crypt from 'crypto-js';

//import from core
import Crypt from '../core/crypto-js';


import './Block_MainPage.scss';

class Block_MainPage extends React.PureComponent {
	
	state = {
	};

  	render() {
		//AES
		//encrypt
		/*
			CBC (the default)
			CFB
			CTR
			OFB
			ECB
		*/
		/*
			Pkcs7 (the default)
			Iso97971
			AnsiX923
			Iso10126
			ZeroPadding
			NoPadding
		*/
		let AESe = Crypt.AES.encrypt("text123д", "password");  
		
		//hash
		let hash = AESe.toString();
		console.log(hash)


		//decrypt hash
		let hashD = Crypt.AES.decrypt(hash, "password");
		let text = hashD.toString(Crypt.enc.Utf8);
		console.log('hash - ',text);

		

		//decrypt object 
		let AESd  = Crypt.AES.decrypt(AESe, "password");  
		var originalText = AESd.toString(Crypt.enc.Utf8);
		console.log('AES - ',originalText);

		//decrypt wrong
		let wrong = Crypt.AES.decrypt(AESe, "password1");
		console.log('right - ',AESd)
		console.log('wrong - ',wrong)
		console.log('wrong - ',wrong.toString(Crypt.enc.Utf8))
		
		
		return (
			<div className={"Block_Filter"}>
				hello
			</div>
		);

  	}

}



export default Block_MainPage;
