import React from 'react';



const InputSpacesHoc = (InnerComponent) => {
    class Spaces extends React.Component {
        writeInRedux=(value)=>{
            console.log('--change');
        }
        render() {
            return <React.Fragment>
                {/* подсовываем модалку */}
                <div>hoc</div>
                {/* Обернутый компонент */}
                <InnerComponent {...this.props} onChange={this.writeInRedux}/>
            </React.Fragment>
        }
    }
    return Spaces;
};

export default InputSpacesHoc;