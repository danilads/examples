let initialState = {
	items:{
		data: {},
		loading: false,
		isLoaded: false,
	},
};

//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		
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
			return {
				...state,
				items:{
					...state.items,
					loading: false,
					isLoaded: true,
					data: action.payload,
				}
			}
		}
		default: return state;
	}
	return state;
};

