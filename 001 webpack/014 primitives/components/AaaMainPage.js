import React, {Fragment ,PureComponent} from 'react';

import Dropdown from './Dropdown';
import RadioButtons from './RadioButtons';
class AaaMainPage extends PureComponent {
    state={
        content:''
    }
    showDropdown=()=>{
        return <Fragment>
                {/* typeof title = 'string' */}
                                <Dropdown title={'title'} dropContent={'content'}/>

                {/* typeof title = 'object' */}
                <Dropdown
                    title={<div>hello</div>}
                    dropContent={<div><br/>hello<hr/></div>}
                />

                {/* typeof title = 'function' */}
                <Dropdown
                    title={(e)=>{
                        console.log('e',e);
                        
                        return <div>{e.isOpened?'открыто':'закрыто'}</div>
                    }}
                    dropContent={<div>content</div>}
                />
        </Fragment>
    }
    showRadioButtons=()=>{
        return <Fragment>
            <RadioButtons/>
        </Fragment>
    }
  	render() {
		return (
            <div>
                <button onClick={()=>{this.setState({content:this.showDropdown()})}}>Dropdown</button>
                <button onClick={()=>{this.setState({content:this.showRadioButtons()})}}>RadioButtons</button>
                <div>{this.state.content}</div>

            </div>
		);
  	}

}



export default AaaMainPage;
