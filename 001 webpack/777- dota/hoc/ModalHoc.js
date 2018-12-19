import React from 'react';
import {connect} from "react-redux";
import './ModalHoc.scss';
import {modalOpen,modalClose} from "../redux/actions";
////HOC его можно экспортить export const
export const  ModalHoc = (BaseComponent) => {
    class ModalHoc extends React.Component {
        state = {
		
        };
        modalBack=()=>{
            this.props.modalClose();
        }
        modalPrevent=(e)=>{
            e.stopPropagation();
        }
     
        
        render() {
            let {isOpened} = this.props;
            return <React.Fragment>
                {isOpened&&<div className="ModalHoc" onClick={this.modalBack}>
                    <div onClick={this.modalPrevent}>modal</div>
                    
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

