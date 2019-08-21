import React,{Fragment} from 'react';
import {IMaskInput} from 'react-imask';
import './Block_MainPage.scss'

class Block_MainPage extends React.PureComponent {
	state={
		pos:1
	} 
	validate=(e)=>{
		console.log(e);
	};
  	render() {
		return (
			<div className={"Block_MainPage"}>
				<IMaskInput
					mask={Number}
					radix="."
					value="123"
					onChange={(e)=>console.log('---change',e.target)}
					unmask={true} // true|false|'typed'
					onAccept={(value, mask) => console.log('---accept',value, mask)}
					placeholder='Enter number here'
				/>
				
				<IMaskInput
					mask={/^[1-6]\d{0,5}$/}
					
				/>
				phone
				<IMaskInput
					mask={'+{7}(000)000-00-00'}
				/>
				iBan
				<IMaskInput
					mask={'****{ }****{ }****'}
					maxLength={9}
					onAccept={(value, mask) => console.log('---accept',value, mask)}
				/>

			</div>
		);

  	}

}



export default Block_MainPage;
