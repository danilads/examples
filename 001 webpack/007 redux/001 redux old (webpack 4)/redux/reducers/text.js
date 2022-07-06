let initialState = {
	data: {},
	value: '',
};

//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		case "SAVE_VALUE": {
			return {
				...state,
				value: action.payload,
				
			}
		}
		default: return state;
	}
	return state;
};

