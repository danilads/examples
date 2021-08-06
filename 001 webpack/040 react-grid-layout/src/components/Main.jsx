import React from 'react';
import './styles.scss';
import Ex01 from './Ex01';
import Ex02 from './Ex02';
import Ex03 from './Ex03';
import Ex04 from './Ex04';
import Ex05 from './Ex05/Ex05';

class Main extends React.PureComponent {
  state={
		ex: 'Ex05'
	}

	render() {
		let {ex} = this.state;
		return (
			<div>
				<div>
					<select value={ex} onChange={(e)=>this.setState({ex:e.target.value})}>
						<option value={'Ex01'}>Ex01</option>
						<option value={'Ex02'}>Ex02</option>
						<option value={'Ex03'}>Ex03</option>
						<option value={'Ex04'}>Ex04</option>
						<option value={'Ex05'}>Ex05</option>
					</select>
				</div>
				<div>
					{ex==='Ex01' && <Ex01/>}
					{ex==='Ex02' && <Ex02/>}
					{ex==='Ex03' && <Ex03/>}
					{ex==='Ex04' && <Ex04/>}
					{ex==='Ex05' && <Ex05/>}
				</div>
			</div>
		)
	}
}

export default Main;
