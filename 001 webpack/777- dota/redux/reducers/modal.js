let initialState = {
	isOpened:false,
	type:"",//news heroes items
};

//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		case "MODAL_OPEN": {
			return {
				...state,
				isOpened:true,
				type:action.payload,
			}
		}
		case "MODAL_CLOSED": {
			return {
				...state,
				isOpened:false
			}
		}
		default: return state;
	}
	return state;
};



