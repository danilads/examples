export function removeDagon (e){
	let arr=[]
	for(let i=0;i<e.length;i++){
		if(e[i].codeName.slice(-3,-1)==='n_'){
			continue;
		}
		arr.push(e[i]);
	}
	return arr;
};