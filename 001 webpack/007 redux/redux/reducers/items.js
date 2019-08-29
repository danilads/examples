let initialState = {
	//стандартные данные
	data: {},
	isFetching: false,
	isLoaded: false,
	//ошибки
	errorMsg: '',
    isError: false,

	//доп
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
				isFetching: true,
			}
		}
		case "ITEMS_LOADED": {
			return {
				...state,
				isFetching: false,
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

