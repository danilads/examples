import React from 'react';
import './Filter.scss';




class Filter extends React.PureComponent {

    state={
       
    }

    render(){
        return (   
            <div>
                {this.props.children}
            </div>)
    }

}
export default Filter;