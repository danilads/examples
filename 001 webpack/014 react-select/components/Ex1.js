import React,{Fragment} from 'react';
import Select from "react-select";

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
  ];

class Ex1 extends React.PureComponent {
	
	state = {
		
	};

  	render() {
		return (
			<div>
				<Select/>
			</div>
		);

  	}

}



export default Ex1;
