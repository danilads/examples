import React from 'react';
import Graphic from './Graphic';

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


  
