import React from 'react';
import {connect} from "react-redux";
import Modal from '../03_primitives/Modal';;
import {modalOpen,modalClose} from "../redux/actions";
export const  ModalHoc = (BaseComponent) => {
    class ModalHoc extends React.Component {
        state = {
		
        };
        modalClose=()=>{
            this.props.modalClose();
        }
        
     
        
        render() {
            let {isOpened} = this.props;
            return <React.Fragment>
                {/* подсовываем модалку */}
                {isOpened&&<Modal cbClose={this.modalClose}/>}
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

