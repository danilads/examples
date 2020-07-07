import React from 'react';
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

class Ex2 extends React.Component {
	
	render() {
  
		return (
			<div style={{margin:'10px' ,width:'cacl(100% - 20px)', background:'gray', height:'200px'}} >
				<div>Ex2 - ограничение родителем / ограничение ресайза</div>
				<Rnd
					bounds="parent"
					enableResizing={{
						top: false,
						right: true,
						bottom: false,
						left: false,
						topRight: false,
						bottomRight: false,
						bottomLeft: false,
						topLeft: false,
					}}
					style={style}
					default={{
						width: 200,
						height: 200,
						x: 0,
						y: 0,
					}}
					resizeGrid={[20, 20]}
					dragGrid={[20, 20]}
				/>
			</div>
    );

	}

}


export default Ex2;