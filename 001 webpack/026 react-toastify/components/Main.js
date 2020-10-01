import React from 'react';

import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';

const Msg = ({closeToast}) => {
	console.log('--+ props', props);
	return <div>
		Lorem ipsum dolor
		<button>Retry</button>
		<button onClick={closeToast}>Close</button>
	</div>
};
  

class Main extends React.PureComponent {
	
	notify = () => toast(
		// string or component
		<Msg/>,
		{
			// POSITION.TOP_LEFT | POSITION.TOP_CENTER | POSITION.BOTTOM_LEFT |	POSITION.BOTTOM_CENTER | POSITION.BOTTOM_RIGHT
			position: toast.POSITION.BOTTOM_CENTER,
			// ms | false
			autoClose: 2000,
			// id to dismiss (also this prop -> disable duplication)
			//toastId: "customId",
			// delay before start (ms)
			delay: 1,
			onOpen: () => console.log('--+ Open CB'),
			onClose: () => console.log('--+ Close CB'),
			
			containerId: 'linkId'

		}
	);

	componentWillUnmount(){
		toast.dismiss();
	}

	render() {
		
		return (<div style={{position: 'relative'}}>
							<button onClick={this.notify}>Notify !</button>
							<button onClick={()=>toast.dismiss()}>Dismiss all</button>
							<button onClick={()=>toast.dismiss("customId")}>Dismiss current toast</button>
	
							{/* не важно где спозициирован  ToastContainer */}
          		<ToastContainer
								// limit -> лимит (значит больше тостов не откроется)
								limit={3}
								// custom close btn
								closeButton={()=>(<div>close</div>)}
								// анимация (Slide, Zoom, Flip, Bounce)
								transition={Slide}
								// по умолчанию можно сбросить драгом
								draggable={false}
								// для разного типа тостов
								enableMultiContainer containerId={'linkId'}
								// спрятатать progress bar
								hideProgressBar={true}
							/>
			</div>);

  	}

}


export default Main;