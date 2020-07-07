import React from 'react';
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

class Ex3 extends React.Component {
	state = {
    width: 200,
    height: 200,
    x: 0,
		y: 0,
		isSet: false
	};

	set=(e)=>{
		console.log('--e',e);
		console.log('--eTop',e.target.getBoundingClientRect());
		console.log('--eX',e.clientX);
		console.log('--eY',e.clientY);
		console.log('--e tar',e.target.offsetLeft);
		console.log('--e tar',e.target.offsetHeight);
		console.log('---------------');
	};

	render() {
		console.log('--state', this.state);
		// STEP
		const STEP = 25;
		return (
			<div style={{margin:'10px' ,width:`${STEP*25}px`, background:'gray', height:'200px'}} onClick={this.set}>
				<div>Ex3 - state controlled + onclick set / disappear</div>
				{this.state.isSet && <Rnd
					style={style}

					bounds="parent"

					size={{ width: this.state.width, height: this.state.height }}
					position={{ x: this.state.x, y: this.state.y }}
					
					resizeGrid={[STEP, STEP]}
					dragGrid={[STEP, STEP]}

					onDragStop={(e, d) => {
						console.log('--d.x',d.x);
						// !library bugfix  need to round!

						const rounded = Math.round(d.x/STEP)*STEP;
						console.log('--rounded',rounded);
						//  y - 0 block moving
            this.setState({ x: rounded, y: 0 });
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.style.width,
              height: ref.style.height,
              ...position,
            });
          }}
				/>}
			</div>
    );

	}

}


export default Ex3;