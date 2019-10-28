import React from 'react';
import copy from 'copy-to-clipboard';
import ClipboardJS from 'clipboard';
 

class Main extends React.PureComponent {
	container=React.createRef();
	copy=()=>{
		copy('Text');
	};
	copy2=()=>{
		copy('Text2');
	};
	componentDidMount() {
		document.addEventListener("click", this.copy2);
		
	}

	componentWillUnmount(){
		document.removeEventListener("click", this.copy2);
	}
  	render() {

		//блиблиотека clipboard работает только через кнопку
		var clipboard = new ClipboardJS('.btn', {
			text: function() {
				return 'to be or not to be';
			}
		});
		clipboard.on('success', function(e) {
			console.log(e);
		});
		clipboard.on('error', function(e) {
			console.log(e);
		});
		return (
			<div>
				<div><button onClick={this.copy}>
					copy some text
				</button></div>
				<div>
				<button className={'btn'}>
					copy some text
				</button>
				</div>
			</div>
		);

  	}

}


export default Main;