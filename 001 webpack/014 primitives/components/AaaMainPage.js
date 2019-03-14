import React, {Fragment ,PureComponent} from 'react';

import Dropdown from './Dropdown';
import RadioButtons from './RadioButtons';
class AaaMainPage extends PureComponent {
    state={
        content:'',

        //RadioButtons
        radioArr:["1","2","3"],
        selectedRadio: "1",

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
            <RadioButtons
                groupName="someBtns"
                arrOfValues={this.state.radioArr}
                value={this.state.radioArr[0]}
                selectedValue={this.state.selectedRadio}
                onChange={(e)=>this.setState({selectedRadio:e})}
            />
            <RadioButtons
                groupName="someBtns"
                arrOfValues={this.state.radioArr}
                value={this.state.radioArr[1]}
                selectedValue={this.state.selectedRadio}
                onChange={(e)=>this.setState({selectedRadio:e})}
            />
            <RadioButtons
                groupName="someBtns"
                arrOfValues={this.state.radioArr}
                value={this.state.radioArr[2]}
                selectedValue={this.state.selectedRadio}
                onChange={(e)=>this.setState({selectedRadio:e})}
            />
        </Fragment>
    }
  	render() {
		return (
            <Fragment>
                <div style={{marginBottom:"20px"}}>
                    <button onClick={()=>{this.setState({content:1})}}>Dropdown</button>
                    <button onClick={()=>{this.setState({content:2})}}>RadioButtons</button>
                

                </div>
                <div>
                    {this.state.content===1&&this.showDropdown()}
                    {this.state.content===2&&this.showRadioButtons()}
                </div>
            </Fragment>
		);
  	}

}



export default AaaMainPage;
