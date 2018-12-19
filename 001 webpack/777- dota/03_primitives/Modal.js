import React from 'react';

import './Modal.scss';


class Modal extends React.PureComponent {
	close
	modalPrevent=(e)=>{
        e.stopPropagation();
    }
  	render() {
		
		return (
			<div className="ModalHoc" onClick={this.props.cbClose}>
                <div onClick={this.modalPrevent}>
                
                helo
                <br/>
                helo
                <br/>
                <button onClick={this.props.cbClose}>shit</button>

                </div>
                    
            </div>
		);

  	}

}



export default Modal