import React from 'react';

import './Layout.scss';

class Layout extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { rotation: 0 };
		this.tick = this.tick.bind(this);
	  }
	
	  componentDidMount() {
		requestAnimationFrame(this.tick);
	  }
	
	  tick() {
		const rotation = this.state.rotation + 0.04;
		this.setState({ rotation });
		requestAnimationFrame(this.tick);
	  }
	
	  render() {
		return <div className="Layout">
				<div style={{color:'red'}}>LAYOUT</div>
				<div><Graphic rotation={this.state.rotation} width={200} height={200} /></div>
				<div>{this.props.children}</div>
			</div>
	  }

  
}


export default Layout;

class Graphic extends React.Component {
	constructor(props) {
	  super(props);
	  this.paint = this.paint.bind(this);
	}
  
	componentDidUpdate() {
	  this.paint();
	}
  
	paint() {
	  const { width, height, rotation } = this.props;
	  const context = this.refs.canvas.getContext("2d");
	  context.clearRect(0, 0, width, height);
	  context.save();
	  context.translate(100, 100);
	  context.rotate(rotation, 100, 100);
	  context.fillStyle = "#F00";
	  context.fillRect(-50, -50, 100, 100);
	  context.restore();
	}
  
	render() {
	  const { width, height } = this.props;
	  console.log('--rotation',Math.round(this.props.rotation));
	  return (
		<canvas
			style={{paddingLeft:`${this.props.rotation}px`}}
			ref="canvas"
			width={width}
			height={height}
		/>
	  );
	}
  }
  
