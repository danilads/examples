import React from 'react';
import {connect} from "react-redux";
import {AC_modalOpen,AC_modalClose} from "../redux/actions/acModal";


export const  HOC_close = (BaseComponent) => {

    class HOC_close extends React.Component {
        state = {
		
        };
        componentDidMount(){
            console.log('все модалки закрыты')
            this.props.AC_modalClose();
        }
        
        render() {
            return <React.Fragment>
                {/* Обернутый компонент */}
                <BaseComponent {...this.props}/>
            </React.Fragment>
        }
    }
    return connect((state) => ({
 
    }),
    {AC_modalOpen,AC_modalClose})(HOC_close);
};

