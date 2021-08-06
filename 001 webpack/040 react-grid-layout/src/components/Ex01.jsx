import React from 'react';
import GridLayout from 'react-grid-layout';
import './styles.scss';


class Ex01 extends React.PureComponent {
  
	render() {
		// layout is an array of objects, see the demo for more complete usage
		const layout = [
		  {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
		  {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
		  {i: 'c', x: 4, y: 0, w: 1, h: 2}
		];
		return (
			<>
			<h6>Ex01 Дефолтный пример (фикс ширига)</h6>
			<GridLayout className="wrap" layout={layout} cols={12} rowHeight={30} width={1200}>
				<div className="item" key="a">a</div>
				<div className="item" key="b">b</div>
				<div className="item" key="c">c</div>
			</GridLayout>
		  </>
		)
	  }
}

export default Ex01;
