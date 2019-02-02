export function save (){

	return "";
};
export function load (){
	console.log('--!')
	return "";
};
export function encrypt (mes,passW,keyS,iter){
	let msg = mes; //msg = 'wtf';
	let pass = passW; //pass = 'p123';
	let keySize = keyS; //keySize = 512;
	let iterations = iter; //iterations = 10000;

	let salt = CryptoJS.lib.WordArray.random(128/8);

	let key = CryptoJS.PBKDF2(pass, salt, {
		keySize: keySize/32,
		iterations: iterations
		});

	let iv = CryptoJS.lib.WordArray.random(128/8);

	let encrypted = CryptoJS.AES.encrypt(msg, key, { 
		iv: iv, 
		padding: CryptoJS.pad.Pkcs7,
		mode: CryptoJS.mode.CBC

	});

	// salt, iv will be hex 32 in length
	// append them to the ciphertext for use  in decryption
	let transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
	console.log("transitmessage",transitmessage);
	return "";
};
export function decrypt (mes, passW){
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
	return "";
};