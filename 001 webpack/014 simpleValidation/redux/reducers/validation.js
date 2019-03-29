let initialState = {
	
		textField1:{
			value: "",
			isValid: false,
			isTouched: false,
			isBlur: true,
		},
		textField2:{
			value: "",
			isValid: false,
			isTouched: false,
			isBlur: true,
		},
		radioField:{
			value: "",
			isValid: false,
			isTouched: false,
			isBlur: true,
		},
		checkField:{
			value: "",
			isValid: false,
			isTouched: false,
			isBlur: true,
		}

	
};

//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		
		case "WRITE_IN_MODEL": {
			return {
				...state,
					[action.payload.model]:{
						...state[action.payload.model],
						value: action.payload.value,
						isTouched: true,
					}
				
			}
		}
		case "SET_ERROR": {
			return {
				...state,
					[action.payload.model]:{
						...state[action.payload.model],
						isValid: action.payload.value,
					}
				
			}
		}
		default: return state;
	}
	return state;
};

