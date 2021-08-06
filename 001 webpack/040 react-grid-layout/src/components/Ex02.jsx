import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './styles.scss';


const ResponsiveGridLayout = WidthProvider(Responsive);

class Ex02 extends React.PureComponent {
	state = {
		layout: [
			{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
			{i: 'b', x: 4, y: 1, w: 2, h: 1, minW: 2, maxW: 4},
			{i: 'c', x: 5, y: 0, w: 1, h: 1}
		  ]
	};

	onLayoutChange = (layout, layouts) => {
		this.setState({layout});
	};

	render() {
		const {layout} = this.state;
		const layouts = {
			lg: layout,
			md: layout,
			sm: layout,
			xs: layout,
			xxs: layout
		};

		return (
			<>
			<h6>Ex02 Неудачный пример (зачем-то нужно мутить с layouts)</h6>
			<div>
				<ResponsiveGridLayout
					className="wrap"
					layouts={layouts}
					onLayoutChange={this.onLayoutChange}
				>
					<div className="item" key="a">a</div>
					<div className="item" key="b">b</div>
					<div className="item" key="c">c</div>
				</ResponsiveGridLayout>
			</div>
		  </>
		)
	  }
}

export default Ex02;
