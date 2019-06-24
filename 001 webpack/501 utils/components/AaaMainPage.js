import React, {Fragment ,PureComponent} from 'react';

import LineBreaker from './LineBreaker';
class AaaMainPage extends PureComponent {
    state={
        content: 101, //101 - LineBreaker 
    }
    //01 LineBreaker
    showLineBreaker=()=>{
        return <LineBreaker/>
    }
    
  	render() {
		return (
            <Fragment>
                <div style={{marginBottom:"20px"}}>
                    <button onClick={()=>{this.setState({content:101})}}>LineBreaker</button>
                    {/* <button onClick={()=>{this.setState({content:102})}}>RadioButtons</button> */}
                </div>
                <div>
                    {this.state.content===101&&this.showLineBreaker()}
                    {/* {this.state.content===102&&this.showRadioButtons()} */}
                </div>
            </Fragment>
		);
  	}

}



export default AaaMainPage;
