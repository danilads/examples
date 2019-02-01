import React,{Fragment} from 'react';
import Select from "react-select";

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
  ];

class Ex1 extends React.PureComponent {
	
	state = {
		selected: null,
		options : [
			{ value: 'chocolate', label: 'Chocolate' },
			{ value: 'strawberry', label: 'Strawberry' },
			{ value: 'vanilla', label: 'Vanilla' }
		  ],
	}
	change = (e) => {
		this.setState({ selected:e });
		
	}

  	render() {
		console.log('--', this.state.selected);
		return (
			<div>
				<Select
					value={this.state.selected}
					onChange={this.change}
					options={this.state.options}
				/>
			</div>
		);

  	}

}



export default Ex1;
