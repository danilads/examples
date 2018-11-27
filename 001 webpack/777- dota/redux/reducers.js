import heroesVerify from "../jsonBackUp/heroesVerify";
import itemsVerify from "../jsonBackUp/itemsVerify";

let initialState = {
	news:{
		data: {},
		loading: false,
		isLoaded: false,
	},
	heroes:{
		data: {},
		loading: false,
		isLoaded: false,
	},
	items:{
		data: {},
		loading: false,
		isLoaded: false,
	},
	abilities:{
		data: {},
		loading: false,
		isLoaded: false,
	},

};

//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		case "ABILITIES_LOADING": {
			return {
				...state,
				abilities:{
					...state.abilities,
					loading: true,
				}
			}
		}
		case "ABILITIES_LOADED": {
			let arr = action.payload;
			let result = [];
			let cnt = 0;
			for (let pos in arr.abilitydata) {
				result.push({...arr.abilitydata[pos],codeName: pos, key: cnt});
				cnt++;
			}
			return {
				...state,
				abilities:{
					...state.abilities,
					loading: false,
					isLoaded: true,
					data: result,
				}
			}
		}
		case "NEWS_LOADING": {
			return {
				...state,
				news:{
					...state.news,
					loading: true,
				}
			}
		}
		case "NEWS_LOADED": {
			let arr = action.payload;
			let result = [];
			for(let i=0;i<arr.appnews.newsitems.length;i++){
				result.push({...arr.appnews.newsitems[i],key:i});
			}
			return {
				...state,
				news:{
					...state.news,
					loading: false,
					isLoaded: true,
					data: result,
				}
			}
		}
		case "HEROES_LOADING": {
			return {
				...state,
				heroes:{
					...state.heroes,
					loading: true,
				}
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
				heroes:{
					...state.heroes,
					loading: false,
					isLoaded: true,
					data: result,
				}
			}
		}
		case "ITEMS_LOADING": {
			return {
				...state,
				items:{
					...state.items,
					loading: true,
				}
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
				items:{
					...state.items,
					loading: false,
					isLoaded: true,
					data: result,
				}
			}
		}
		default: return state;
	}
	return state;
};



