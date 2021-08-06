import React from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);
import './styles.scss';

const localStorageKey = 'localStorageKey';

class Ex03 extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			layout: [
				{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
				{i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
				{i: 'c', x: 4, y: 0, w: 1, h: 2}
			  ]
		};

		// load from local storage (dont use from componentDidMount)

		const localStorageData = JSON.parse(localStorage.getItem(localStorageKey));

		if (Array.isArray(localStorageData)) {
			this.state = {
				layout: localStorageData
			}
		}
	}

	onLayoutChange = (layout, layouts) => {
		this.setState({layout});
		// save in local storage
		localStorage.setItem(localStorageKey, JSON.stringify(layout));
	};

	render() {
		const {layout} = this.state;
		return (
			<>
			<h6>Ex03 local storage + adaptive </h6>
			<ReactGridLayout
				className="wrap"
				layout={layout}
				cols={12}
				rowHeight={30}
				onLayoutChange={this.onLayoutChange}
			>
				<div className="item" key="a">a</div>
				<div className="item" key="b">b</div>
				<div className="item" key="c">c</div>
			</ReactGridLayout>
		  </>
		)
	  }
}

export default Ex03;
