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
            let {modal} = this.props;
            return <React.Fragment>
                {/* подсовываем модалку */}
                {modal.isOpened&&<Modal data={modal} cbClose={this.modalClose}/>}
                {/* Обернутый компонент */}
                <BaseComponent/>
            </React.Fragment>
        }
    }
    return connect((state) => ({
        modal: state.modal,

    }),
    {modalOpen,modalClose})(ModalHoc);
};

