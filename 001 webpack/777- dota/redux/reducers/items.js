import itemsVerify from "../../jsonBackUp/itemsVerify";

let initialState = {
	data: {},
	loading: false,
	isLoaded: false,
};

//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		case "ITEMS_LOADING": {
			return {
				...state,
				loading: true,
			}
		}
		case "ITEMS_LOADED": {
			let arr = action.payload;
			let result = [];
			let cnt = 0;
			for (let pos in arr.itemdata) {
				if(itemsVerify.includes(arr.itemdata[pos].dname)){
					result.push({...arr.itemdata[pos],codeName: pos, key: cnt});
					cnt++;
				}
			}
			return {
				...state,
				loading: false,
				isLoaded: true,
				data: result,
			}
		}
		default: return state;
	}
	return state;
};



