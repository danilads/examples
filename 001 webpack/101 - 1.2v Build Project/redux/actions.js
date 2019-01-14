//backup если не загрузятся данные
import heroesBackUpJson from "../jsonBackUp/heroes";


//в асинхронной функции все работает по порядку
//до тех пор пока  не отработает await дальше код не пойдет
export const AC_loadHeroes = () => async (dispatch, getState) => {
	dispatch({
        type: 'HEROES_LOADING'
	});
	

	let answer;
	
	try {
		answer = await fetch('https://cors-anywhere.herokuapp.com/http://www.dota2.com/jsfeed/heropickerdata?v=18874723138974056&l=english', {
					method: 'GET',
				});
	} catch (e) {
		//диспчаем ошибку
		console.log('error', e);
	}

	/*
	isoFetch('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?l=german&appid=570&key=8BF24A2B3BEA4957FBC230A31E75AC63', {
		method: 'GET',
	})
	.then(response => response.json())
	.then(json => 
		dispatch({
			type: 'NEWS_LOADED',
			payload: json
		})
	)
	*/	

	/*
	можно вызывать два type под одним имененм
	setTimeout(() => dispatch({
		type: '',
		payload: '',
	}), 2000);
	*/

	if(answer===undefined){
		setTimeout(() => {
			dispatch({
				type: 'HEROES_LOADED',
				payload: heroesBackUpJson
			})
		  }, 2000)
	}
	else{
		answer.json().then( data => {
			setTimeout(() => {
				dispatch({
					type: 'HEROES_LOADED',
					payload: data
				})
			  }, 2000)
		});
	}
	
};

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
