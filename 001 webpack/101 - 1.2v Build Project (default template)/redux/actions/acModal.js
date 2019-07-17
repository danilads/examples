export const AC_modalOpen = (e) => (dispatch, getState) => {
	document.body.style.overflow = 'hidden';
	dispatch({
		type: 'MODAL_OPEN',
		payload: e
	});
}
export const AC_modalClose = () => (dispatch, getState) => {
	document.body.style.overflow = 'auto';
	dispatch({
        type: 'MODAL_CLOSED'
	});
}
