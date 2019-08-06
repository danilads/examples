//getState() - возвращает весь state редакса
export const save = (e) => (dispatch, getState) => {
	//если нужно получить store то лучше брать отдельные объекты
	let {items,text} = getState();
	console.log('prev',text);
	//можно вызывать два диспача
	// dispatch({
	// 	type: 'SAVE_VALUE',
	// 	payload: e
	// })
	dispatch({
		type: 'SAVE_VALUE',
		payload: e
	})
}

export const some3 = () => async (dispatch, getState) => {
	console.log('---some3 state',getState());
}