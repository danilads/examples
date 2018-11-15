import React from 'react';
import deepEqual from 'deep-equal';



class Block_MainPage extends React.PureComponent {

  	render() {
		let obj1 = {a:{a:1}};
		let obj2 = {a:{a:1}};
		console.log(deepEqual(obj1,obj2));
		return (
			<div className={"Block_Main"}>
				Block_Main
			</div>
		);

  	}

}


export default Block_MainPage;
