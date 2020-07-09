import React from 'react';
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

class Ex1 extends React.Component {
	
	render() {
    // bottom?: React.CSSProperties,
		// bottomLeft?: React.CSSProperties,
		// bottomRight?: React.CSSProperties,
		// left?: React.CSSProperties,
		// right?: React.CSSProperties,
		// top?: React.CSSProperties,
		// topLeft?: React.CSSProperties,
		// topRight?: React.CSSProperties
		return (
			<React.Fragment>
			<div>Ex1 - ресайз кнопка</div>
			<div>
				<Rnd
					style={style}
					default={{
						width: 200,
						height: 200,
						x: 0,
						y: 0,
					}}
					resizeGrid={[20, 20]}
					dragGrid={[20, 20]}
					resizeHandleComponent={{ right: <div style={{width:'10px',height:'100%',background:'red'}}/> }}
				/>
			</div>
			</React.Fragment>
    );

	}

}


export default Ex1;