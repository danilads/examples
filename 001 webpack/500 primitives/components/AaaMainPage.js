import React, {Fragment ,PureComponent} from 'react';

import Dropdown from './Dropdown';
import RadioButtons from './RadioButtons';
import InputTextWithSpaces from './InputTextWithSpaces';
class AaaMainPage extends PureComponent {
    state={
        content:'',

        //RadioButtons
        selectedRadio: "1",

        selectedRadio2: "1",

    }
    radioButton=(e)=>{
        return <span style={{border:"1px solid black"}}>
            <span style={e.isChecked?{color:'red'}:{}}>button</span>
        </span>
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
    setRadio2=(e)=>{
        this.setState({selectedRadio2:e})
    }
    showRadioButtons=()=>{
        return <Fragment>
            <RadioButtons
                name="someBtns"
                label="label 1"
                value={"1"}
                selectedValue={this.state.selectedRadio}
                onChange={(e)=>this.setState({selectedRadio:e})}
                
            />
            <RadioButtons
                name="someBtns"
                label="label 2"
                value={"2"}
                selectedValue={this.state.selectedRadio}
                onChange={(e)=>this.setState({selectedRadio:e})}
                
            />
            <RadioButtons
                name="someBtns"
                label="label 3"
                value={"3"}
                selectedValue={this.state.selectedRadio}
                onChange={(e)=>this.setState({selectedRadio:e})}
                
            />

            <RadioButtons
                name="someBtns2"
                label="label 1"
                value={"1"}
                selectedValue={this.state.selectedRadio2}
                onChange={this.setRadio2}
                customView={this.radioButton}
            />
            <RadioButtons
                name="someBtns2"
                label="label 2"
                value={"2"}
                selectedValue={this.state.selectedRadio2}
                onChange={this.setRadio2}
                customView={this.radioButton}
            />
            <RadioButtons
                name="someBtns2"
                label="label 3"
                value={"3"}
                selectedValue={this.state.selectedRadio2}
                onChange={this.setRadio2}
                customView={this.radioButton}
            />
        </Fragment>
    }
    showInputWithSpaces=()=>{
        return <Fragment>
            <InputTextWithSpaces/>
        </Fragment>
    }
  	render() {
		return (
            <Fragment>
                <div style={{marginBottom:"20px"}}>
                    <button onClick={()=>{this.setState({content:1})}}>Dropdown</button>
                    <button onClick={()=>{this.setState({content:2})}}>RadioButtons</button>
                    <button onClick={()=>{this.setState({content:3})}}>InputWithSpaces</button>
                

                </div>
                <div>
                    {this.state.content===1&&this.showDropdown()}
                    {this.state.content===2&&this.showRadioButtons()}
                    {this.state.content===3&&this.showInputWithSpaces()}
                </div>
            </Fragment>
		);
  	}

}



export default AaaMainPage;
