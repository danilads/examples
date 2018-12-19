import React from 'react';
import {connect} from "react-redux";
import './ModalHoc.scss';
import {modalOpen,modalClose} from "../redux/actions";
////HOC его можно экспортить export const
export const  ModalHoc = (BaseComponent) => {
    class ModalHoc extends React.Component {
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
            return <React.Fragment>
                {isOpened&&<div className="ModalHoc" onClick={this.modal}>
                    <div>modal</div>
                    
                </div>}
                {/* Обернутый компонент */}
                <BaseComponent/>
            </React.Fragment>
        }
    }
    return connect((state) => ({
        isOpened: state.modal.isOpened,
    }),
    {modalOpen,modalClose})(ModalHoc);
};

