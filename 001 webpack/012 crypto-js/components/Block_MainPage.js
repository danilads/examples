import React,{Fragment} from 'react';

//import from npm
//import CryptoJS from 'crypto-js';

//import from core
import CryptoJS from '../core/crypto-js';


import './Block_MainPage.scss';

class Block_MainPage extends React.PureComponent {
	
	state = {
	};

  	render() {
		//////////////////////////////////////////
			//SHA-3
			//var hash = CryptoJS.SHA3("Message", { outputLength: 512 });
			//console.log('hash',hash.toString());

		
			//////////////////////////////////////////
			//SIMPLE AES
			// var string = 'Lorem ipsum dolor sit amet, ...';
			// var password = 'my-password';

			// var encrypted = CryptoJS.AES.encrypt(string, password);
			// console.log(encrypted.toString());
		
			// var decrypted = CryptoJS.AES.decrypt(encrypted, password);
			// console.log(decrypted.toString(CryptoJS.enc.Utf8));

			//////////////////////////////////////////
			//AES ADVANCED

			// //encrypt
			// var salt = CryptoJS.lib.WordArray.random(128/8);
			// var iv = CryptoJS.lib.WordArray.random(128 / 8)
			// var pass = CryptoJS.PBKDF2('password', salt, { keySize: 512 / 32, iterations: 1000 }).toString();
		
			// var encrypted = CryptoJS.AES.encrypt('some text', pass, { iv: iv, padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CBC })
			// console.log('encrypt',encrypted.toString())

			// //decrypt
			// //var key = CryptoJS.PBKDF2(encrypt, CryptoJS.enc.Hex.parse('password'.substr(0, 32)), { keySize: 512 / 32, iterations: 1000 });

			// var decrypted = CryptoJS.AES.decrypt(encrypted, pass, { iv: iv, padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CBC });

			// console.log('decrypt',decrypted.toString(CryptoJS.enc.Utf8));


			//////////////////////////////////////////
			//APP
			var msg = 'wtf';
			var pass = 'p123';
			var keySize = 256;
			var ivSize = 128;
			var iterations = 100;

			//encrypt
			var salt = CryptoJS.lib.WordArray.random(128/8);

			var key = CryptoJS.PBKDF2(pass, salt, {
				keySize: keySize/32,
				iterations: iterations
				});

			var iv = CryptoJS.lib.WordArray.random(128/8);

			var encrypted = CryptoJS.AES.encrypt(msg, key, { 
				iv: iv, 
				padding: CryptoJS.pad.Pkcs7,
				mode: CryptoJS.mode.CBC

			});

			// salt, iv will be hex 32 in length
			// append them to the ciphertext for use  in decryption
			var transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
			console.log(transitmessage);


			//decrypt
			var salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
			var iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
			var encrypted = transitmessage.substring(64);

			var key = CryptoJS.PBKDF2(pass, salt, {
				keySize: keySize/32,
				iterations: iterations
				});

			var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
				iv: iv, 
				padding: CryptoJS.pad.Pkcs7,
				mode: CryptoJS.mode.CBC

			})
			console.log(decrypted.toString(CryptoJS.enc.Utf8));
		
		
		return (
			<div className={"Block_Filter"}>
				hello
			</div>
		);

  	}

}



export default Block_MainPage;
