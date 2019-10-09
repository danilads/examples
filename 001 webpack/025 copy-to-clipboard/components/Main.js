import React from 'react';
import copy from 'copy-to-clipboard';
 

class Main extends React.PureComponent {
	
	copy=()=>{
		copy('Text');
	};
  	render() {
		
		return (
			<button onClick={this.copy}>
			    copy some text
			</button>
		);

  	}

}


export default Main;