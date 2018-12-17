import React from 'react';

import './Modal.scss';
import {connect} from "react-redux";
import {modalOpen,modalClose} from "../redux/actions";
class Modal extends React.PureComponent {
	
	state = {
		
	};
	modal=()=>{
        console.log('open')
        this.props.modalClose();
    }
    mouseDown=()=>{
        console.log('mousedown');
    }
    componentDidMount() { 
        document.addEventListener("onmousedown", this.mouseDown);
    }
    componentWillUnmount(){
        document.removeEventListener("onmousedown", this.mouseDown);
    }
  	render() {
		let {isOpened} = this.props;
        //console.log('render heroes');
        if(isOpened){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'auto';
        }
		return (
            <React.Fragment>
                {isOpened&&<div className="Modal" onClick={this.modal}>
                    <div>modal</div>
                    
                </div>}
            </React.Fragment>
		);

  	}

}

export default connect((state) => ({
	isOpened: state.modal.isOpened,
}),
{modalOpen,modalClose})(Modal);
