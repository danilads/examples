import CryptoJS from 'crypto-js';

export function save (hashName,salt,iv,encr,keyS,iter,salt2str,iv2str){
	localStorage.setItem(hashName+"1", JSON.stringify(salt));
	localStorage.setItem(hashName+"2", JSON.stringify(iv));
	localStorage.setItem(hashName+"3", encr);
	localStorage.setItem(hashName+"4", keyS);
	localStorage.setItem(hashName+"5", iter);
	localStorage.setItem(hashName+"6", salt2str);
	localStorage.setItem(hashName+"7", iv2str);
};

export function load (e){
	let data = {};
	data.salt=localStorage.getItem(e+"1");
	data.iv=localStorage.getItem(e+"2");
	data.encrypt=localStorage.getItem(e+"3");
	data.keySize=localStorage.getItem(e+"4");
	data.iter=localStorage.getItem(e+"5");
	data.salt2str=localStorage.getItem(e+"6");
	data.iv2str=localStorage.getItem(e+"7");

	return  data;
};
export function encrypt (mes,passW,keyS,iter,slt,iV,salt2str,iv2str){
	let msg = mes; //msg = 'wtf';
	let pass = passW; //pass = 'p123';
	let keySize = keyS; //keySize = 512;
	let iterations = iter; //iterations = 10000;

	let salt = JSON.parse(slt); //salt = CryptoJS.lib.WordArray.random(128/8);
	let iv = JSON.parse(iV); //iv = CryptoJS.lib.WordArray.random(128/8);

	let key = CryptoJS.PBKDF2(pass, salt, {
		keySize: keySize/32,
		iterations: iterations
	});

	
	let encrypted = CryptoJS.AES.encrypt(msg, key, { 
		iv: iv, 
		padding: CryptoJS.pad.Pkcs7,
		mode: CryptoJS.mode.CBC

	});

	// salt, iv will be hex 32 in length
	// append them to the ciphertext for use  in decryption
	let transitmessage = salt2str+ iv2str + encrypted.toString();
	console.log("transitmessage",transitmessage);
	return transitmessage;
};
export function decrypt (mes,passW,keySize,iterations){
	let transitmessage = mes;
	var salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
	var iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
	var encrypted = transitmessage.substring(64);

	var key = CryptoJS.PBKDF2(passW, salt, {
		keySize: keySize/32,
		iterations: iterations
		});

	var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
		iv: iv, 
		padding: CryptoJS.pad.Pkcs7,
		mode: CryptoJS.mode.CBC

	})
	console.log("decript",decrypted.toString(CryptoJS.enc.Utf8));
	return decrypted.toString(CryptoJS.enc.Utf8);
};