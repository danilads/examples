import React,{Fragment} from 'react';


import Crypt from '../core/crypto-js';

import './Block_MainPage.scss';

class Block_MainPage extends React.PureComponent {
	
	state = {
	};

  	render() {
		//AES
		/*** encrypt */  
		let AESe = Crypt.AES.encrypt("plaintext", "Secret Passphrase");  
		console.log('AES encrypt',AESe);

		/*** decrypt */  
		let AESd  = Crypt.AES.decrypt(AESe, "Secret Passphrase");  
		console.log('AES decrypt',AESd);
		
		//  get text
		var originalText = AESd.toString(Crypt.enc.Utf8);
		console.log('AES text',originalText);
		
		return (
			<div className={"Block_Filter"}>
				hello
			</div>
		);

  	}

}



export default Block_MainPage;
