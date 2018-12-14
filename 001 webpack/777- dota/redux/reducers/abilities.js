let initialState = {
	data: {},
	loading: false,
	isLoaded: false,
};

//export default (state = initialState, {type,payload}) - сокращенная запись
export default (state = initialState, action) => {
	switch(action.type) {
		case "ABILITIES_LOADING": {
			return {
				...state,
				loading: true,
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
			// нужно добавить в abilitiesVerify
			result.push({codeName: "invoker_mana_break", dname: "Mana Break", key:cnt+1, desc: "Burns an opponent's mana on each attack.  Mana Break deals 50% of the mana burned as damage to the target."})
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



