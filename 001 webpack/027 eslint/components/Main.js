import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';

class Main extends React.PureComponent {
	
	notify = () => toast("Wow so easy !");
  	render() {
		
		return (<div>
				<button onClick={this.notify}>Notify !</button>
          		<ToastContainer />
			</div>);

  	}

}


export default Main;