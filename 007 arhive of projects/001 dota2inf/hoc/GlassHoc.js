import React from 'react';
import './GlassHoc.scss';
export const  GlassHoc = (BaseComponent) => {
    class GlassHoc extends React.Component {
       
        
        render() {
            return <React.Fragment>
                {/* Обернутый компонент */}
                {/* css pointer-events none */}

                <div className='GlassHoc'></div><BaseComponent {...this.props}/>
            </React.Fragment>
        } 
    }
    return GlassHoc;
};

