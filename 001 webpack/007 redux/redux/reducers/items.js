let initialState = {
	data: {},
	loading: false,
	isLoaded: false,
	some: '',
	innerObj: {
		key: "",
		text: "",
	}
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
			return {
				...state,
				loading: false,
				isLoaded: true,
				data: action.payload,
			}
		}
		case "ITEMS_WRITE_FROM_FUNC_TO_ITEMS": {
			//вложенность
			return {
				...state,
				some: action.payload,
				innerObj:{
					...state.innerObj,
					text:action.payload,
				}
			}
		}
		default: return state;
	}
	return state;
};

