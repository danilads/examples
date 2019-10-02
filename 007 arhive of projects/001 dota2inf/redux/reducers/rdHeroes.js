import heroesVerify from "../../jsonBackUp/heroesVerify.json";

let initialState = {
	data: {},
	loading: false,
	isLoaded: false,
};

//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		case "HEROES_LOADING": {
			return {
				...state,
				loading: true,
			}
		}
		case "HEROES_LOADED": {
			let arr = action.payload;
			let result = [];
			let cnt = 0;
			for (let pos in arr) {
				if(heroesVerify.includes(arr[pos].name)){
					result.push({...arr[pos],codeName: pos, key: cnt});
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



