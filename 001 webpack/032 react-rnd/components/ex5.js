import React from 'react';
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "rgba(10,10,10,0.3)"
};

class Ex5 extends React.Component {
	state = {
		STEP: 25,
		rnds: [
			{
				width: 75,
				height: 200,
				x: 0,
				y: 0
			},
			{
				width: 75,
				height: 200,
				x: 100,
				y: 0,
			},
			{
				width: 75,
				height: 200,
				x: 200,
				y: 0,
			},
		]
	};


	render() {
		console.log('--state', this.state);
		// STEP
		const {STEP} = this.state;
		return (
			<React.Fragment>
			<div>Ex5 - multi </div>
			<div ref={this.parentRef} style={{margin:'10px' ,width:`${STEP*25}px`, background:'gray', height:'200px'}}>
				{[0,1,2].map(i => 
				(<Rnd
					key={i}
					style={style}
					onClick={(e)=>{
						e.stopPropagation();
					}}
					bounds="parent"

					enableResizing={{
            top: false,
            right: false,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}

					size={{ width: this.state.rnds[i].width, height: this.state.rnds[i].height }}
					position={{ x: this.state.rnds[i].x, y: this.state.rnds[i].y }}
					
					
					dragGrid={[STEP, STEP]}

					onDragStop={(e, d) => {
						const rnds = [...this.state.rnds];
						// !library bugfix  need to round!
						const rounded = Math.round(d.x/STEP)*STEP;
						//  y - 0 (block not moving)
						rnds[i] = { ...rnds[i], x: rounded, y: 0 };
						this.setState({ rnds });
          }}
          
				/>))}
			</div>
			</React.Fragment>
    );

	}

}


export default Ex5;