import React from 'react';
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

  export default Graphic;