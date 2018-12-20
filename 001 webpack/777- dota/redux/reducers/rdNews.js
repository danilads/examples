let initialState = {
	data: {},
	loading: false,
	isLoaded: false,
};

//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		case "NEWS_LOADING": {
			return {
				...state,
				loading: true,
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
				loading: false,
				isLoaded: true,
				data: result,
			}
		}
		default: return state;
	}
	return state;
};



