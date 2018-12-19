let initialState = {
	isOpened:false,
	type:"",//N H I
	data: {},
}
//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		case "MODAL_OPEN": {
			return {
				...state,
				isOpened:true,
				type:action.payload.type,
				data:action.payload.data
			}
		}
		case "MODAL_CLOSED": {
			return {
				...state,
				isOpened:false,
				type:"",
				data: {}
			}
		}
		default: return state;
	}
	return state;
};



