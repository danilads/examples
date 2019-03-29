//getState() - возвращает весь state редакса
export const writeInModel = (value, model) => (dispatch, getState) => {
	let obj = {
		value: value,
		model: model
	};
	dispatch({
		type: 'WRITE_IN_MODEL',
		payload: obj
	})
}
export const setError = (value, model) => (dispatch, getState) => {
	let obj = {
		value: value,
		model: model
	};
	dispatch({
		type: 'SET_ERROR',
		payload: obj
	})
}

////////
/////old
////////
export const save = (e) => (dispatch, getState) => {
	//если нужно получить store то лучше брать отдельные объекты
	let {items,text} = getState();
	console.log(items);
	console.log(text);
	dispatch({
		type: 'SAVE_VALUE',
		payload: e
	})
}
export const load = () => async (dispatch, getState) => {
	
	dispatch({
        type: 'ITEMS_LOADING'
	});

	let answer;
	try {
		answer = await fetch('https://cors-anywhere.herokuapp.com/http://www.dota2.com/jsfeed/itemdata', {
					method: 'GET',
				});
		
	} catch (e) {
		console.log('error', e);
	}
	if(answer===undefined){
		setTimeout(() => {
			dispatch({
				type: 'ITEMS_LOADED',
				payload: {someData:123}
			})
		  }, 2000)
	}
	else{
		answer.json().then( data => {
			setTimeout(() => {
				dispatch({
					type: 'ITEMS_LOADED',
					payload: data
				})
			  }, 2000)
		});
	}
	
	
};