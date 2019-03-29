import React from 'react';
import {connect} from "react-redux";

import {writeInModel} from "../redux/actions";





const connectedHoc = (BaseComponent) => {
    class ConnectedHoc extends React.Component {
    
        writeInRedux=(value)=>{
            this.props.writeInModel(value.target.value,this.props.model)
        }
        render() {
            return <React.Fragment>
                {/* подсовываем модалку */}
                <div>hoc</div>
                {/* Обернутый компонент */}
                <BaseComponent {...this.props} onChange={this.writeInRedux}/>
            </React.Fragment>
        }
    }
    return connect((state) => ({
        reducer: state.reducer
    }),
    {writeInModel})(ConnectedHoc);
};

export default connectedHoc;