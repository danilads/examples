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
			<React.Fragment>
				<div>Ex0 - deafult (resize disabled)</div>
			
			<div>
				
				<Rnd
					style={style}
					default={{
						width: 200,
						height: 200,
						x: 0,
						y: 0,
					}}
					enableResizing={false}
				
					dragGrid={[20, 20]}
				/>
			</div>
			</React.Fragment>
    );

	}

}


export default Ex0;