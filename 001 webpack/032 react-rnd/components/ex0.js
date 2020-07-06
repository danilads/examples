import React from 'react';
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

class Ex0 extends React.Component {

	render() {
    
		return (
			<div>
				<div>Ex0</div>
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
				>
					001
				</Rnd>
			</div>
    );

	}

}


export default Ex0;