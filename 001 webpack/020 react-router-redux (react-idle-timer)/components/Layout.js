import React from 'react';

//react-idle-timer
import IdleTimer from 'react-idle-timer';
import { browserHistory } from "react-router";

//срабатывает когда таймер вышел
function onIdle (){
	console.log('---onIdle');
	//logout
	browserHistory.push('/pageOne')
}
//срабатывает при действиях
function onAction (){
	console.log('---onAction');
}

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
		return <div className="Layout" style={{border:'3px solid red'}}>
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
	  context.fillStyle = "#cefefe";
	  context.fillRect(-50, -50, 100, 100);
	  context.restore();
	}
  
	render() {
	  const { width, height } = this.props;
	  //console.log('--rotation',Math.round(this.props.rotation));
	  return (
		  <React.Fragment>
			<IdleTimer
				element={document}
			
				onIdle={onIdle}
				onAction={onAction}
			
				timeout={1000 * 5 * 1}
			/>
			<canvas
				style={{paddingLeft:`${this.props.rotation}px`}}
				ref="canvas"
				width={width}
				height={height}
			/>
		</React.Fragment>
	  );
	}
  }
  
