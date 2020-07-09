import React from 'react';
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "rgba(10,10,10,0.3)"
};

class Ex3 extends React.Component {
	state = {
		STEP: 25,
    width: 75, // не больше чем RND maxWidth 
    height: 200,
    x: 0,
		y: 0,
		isSet: false,
	};

	parentRef = React.createRef();
	
	setEvent=(e)=>{
		if(e.target.isEqualNode(this.parentRef.current)){
			const {STEP,width} = this.state;
			const left = e.pageX-(window.scrollX+e.target.getBoundingClientRect().left)+1;
			let result = Math.floor(left/STEP)*STEP;
			//не должно быть больше ширины родителя (STEP*25)
			if ((result+width)>(STEP*25)) {
				result = STEP*25-width;
			}

			// (BLOCKED) !NEED TO CALCULATE
			console.log('--result',result);
			if(result===50 || result===25){
				result=0;
			}
			this.setState({isSet:true, x: result});
		}
	}

	componentDidMount() {
		document.addEventListener("mousedown", this.setEvent, false);
	}

	componentWillUnmount(){
		document.removeEventListener("mousedown", this.setEvent, false);
	}

	render() {
		console.log('--state', this.state);
		// STEP
		const {STEP} = this.state;
		return (
			<React.Fragment>
			<div>Ex4 - (BLOCKED) occupied slot </div>
			<div ref={this.parentRef} style={{margin:'10px' ,width:`${STEP*25}px`, background:'gray', height:'200px'}}>
				<div style={{marginLeft:'75px' ,width:`${3*25}px`, background:'red', height:'200px'}}/>

				{this.state.isSet && <Rnd
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

					size={{ width: this.state.width, height: this.state.height }}
					position={{ x: this.state.x, y: this.state.y }}
					
					
					dragGrid={[STEP, STEP]}

					onDragStop={(e, d) => {
						// !library bugfix  need to round!
						const rounded = Math.abs(Math.round(d.x/STEP)*STEP);

						// (BLOCKED) 
						if(rounded<150 && rounded!== 0 ){
							return;
						}
						//  y - 0 (block not moving)
            this.setState({ x: rounded, y: 0 });
          }}
       
				/>}
			</div>
			</React.Fragment>
    );

	}

}


export default Ex3;