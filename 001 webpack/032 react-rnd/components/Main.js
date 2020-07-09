import React from 'react';
import Ex0 from './ex0';
import Ex1 from './ex1';
import Ex2 from './ex2';
import Ex3 from './ex3';
import Ex4 from './ex4';
import Ex5 from './ex5';

class Main extends React.Component {
	state={
		ex: '5'
	}

	render() {
		let {ex} = this.state;
		
		return (
			<div>
				<div>
					<select value={ex} onChange={(e)=>this.setState({ex:e.target.value})}>
						<option value={'0'}>ex0</option>
            <option value={'1'}>ex1</option>
            <option value={'2'}>ex2</option>
            <option value={'3'}>ex3</option>
            <option value={'4'}>ex4</option>
            <option value={'5'}>ex5</option>
					</select>
				</div>
				<div>
					{ex==='0' && <Ex0/>}
					{ex==='1' && <Ex1/>}
					{ex==='2' && <Ex2/>}
					{ex==='3' && <Ex3/>}
					{ex==='4' && <Ex4/>}
					{ex==='5' && <Ex5/>}
				</div>
			</div>
		)
	}

}


export default Main;