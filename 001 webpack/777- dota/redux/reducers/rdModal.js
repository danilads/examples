let initialState = {
	isOpened:false,
	type:"",//N H I
	name:"",//tusk
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
				name:action.payload.name,
				data:action.payload.data
			}
		}
		case "MODAL_CLOSED": {
			return {
				...state,
				isOpened:false,
				type:"",
				name:"",
				data: {}
			}
		}
		default: return state;
	}
	return state;
};



