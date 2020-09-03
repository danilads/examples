import React from 'react';
import Ex0 from './Ex0';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Ex7 from './Ex7';
import Ex8 from './Ex8';
import Ex9 from './Ex9';
import Ex10 from './Ex10';

class Main extends React.Component {
	state={
		ex: '10'
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
						<option value={'6'}>ex6</option>
						<option value={'7'}>ex7</option>
						<option value={'8'}>ex8</option>
						<option value={'9'}>ex9</option>
						<option value={'10'}>ex10</option>
					</select>
				</div>
				<div>
					{ex==='0' && <Ex0/>}
					{ex==='1' && <Ex1/>}
					{ex==='2' && <Ex2/>}
					{ex==='3' && <Ex3/>}
					{ex==='4' && <Ex4/>}
					{ex==='5' && <Ex5/>}
					{ex==='6' && <Ex6/>}
					{ex==='7' && <Ex7/>}
					{ex==='8' && <Ex8/>}
					{ex==='9' && <Ex9/>}
					{ex==='10' && <Ex10/>}
				</div>
			</div>
		)
	}

}


export default Main;