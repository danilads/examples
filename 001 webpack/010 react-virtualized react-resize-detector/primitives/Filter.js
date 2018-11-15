import React from 'react';
import './Filter.scss';




class Filter extends React.PureComponent {

    state={
       
    }

    render(){
        return (   
            <div key={key}>
                {this.props.children[index]}
            </div>)
    }

}
export default Filter;