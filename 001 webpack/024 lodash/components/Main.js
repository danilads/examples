import React from 'react';
import {sortBy} from 'lodash-es'; // best way to import

class Main extends React.PureComponent {
	
	
  	render() {
			var users = [
				{ 'user': 'fred',   'age': 48 },
				{ 'user': 'barney', 'age': 36 },
				{ 'user': 'fred',   'age': 40 },
				{ 'user': 'barney', 'age': 34 }
			];
			
			console.log(sortBy(users,'age'));
		return (
			<div>
			    LODASH
			</div>
		);

  	}

}


export default Main;