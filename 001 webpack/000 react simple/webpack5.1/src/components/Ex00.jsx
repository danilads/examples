import React from 'react';
import imgEx from '../assets/images.png';

class Ex00 extends React.Component {
	state={
		
	}

	render() {
    console.log('--+ test2');
    return (
			<div>
        <img className="img" src={imgEx} />
        <h1>Jest simple</h1>
        <div className='item'>
          item5468923
        </div>
        <a href={imgEx} download>download</a>
      </div>
      )
	}

}


export default Ex00;