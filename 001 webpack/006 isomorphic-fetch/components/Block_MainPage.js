import React from 'react';
import {default as isoFetch} from 'isomorphic-fetch';

class Block_MainPage extends React.PureComponent {
	
	state = {
		
	};
	request = async () => {
		console.log('send');
		

		/*
		let answer;
			try {
				answer = await isoFetch('https://jsonplaceholder.typicode.com/posts', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
					},
					body: JSON.stringify({
						title: 'foo',
						body: 'bar',
						userId: 1
					  })
				});
				
		} catch (e) {
			console.log('error', e);
		}
		answer.json().then( data => {
			console.log(data);
		});
		*/
		
		/*
		isoFetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'foo',
				body: 'bar',
				userId: 1
				}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(response => response.json())
		.then(json => console.log(json))
		*/
	};

  	render() {
		return (
			<div>
				<input type="button" value="request" onClick={this.request}/>
			</div>
		);

  	}

}



export default Block_MainPage;
