import React, {Fragment ,PureComponent} from 'react';

import Dropdown from './Dropdown';
import RadioButtons from './RadioButtons';
class AaaMainPage extends PureComponent {
    state={
        content:'',

        //RadioButtons
        radioArr:["1","2","3"],
        selectedRadio: "1",
        radioArr2:["1","2","3"],
        selectedRadio2: "1",

    }
    radioButton=(e)=>{
        return <span style={{border:"1px solid black"}}>
            <span style={e?{color:'red'}:{}}>button</span>
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
    showRadioButtons=()=>{
        return <Fragment>
            <RadioButtons
                groupName="someBtns"
                label="label 1"
                arrOfValues={this.state.radioArr}
                value={this.state.radioArr[0]}
                selectedValue={this.state.selectedRadio}
                onChange={(e)=>this.setState({selectedRadio:e})}
            />
            <RadioButtons
                groupName="someBtns"
                label="label 2"
                arrOfValues={this.state.radioArr}
                value={this.state.radioArr[1]}
                selectedValue={this.state.selectedRadio}
                onChange={(e)=>this.setState({selectedRadio:e})}
            />
            <RadioButtons
                groupName="someBtns"
                label="label 3"
                arrOfValues={this.state.radioArr}
                value={this.state.radioArr[2]}
                selectedValue={this.state.selectedRadio}
                onChange={(e)=>this.setState({selectedRadio:e})}
            />

            <RadioButtons
                groupName="someBtns2"
                label="label 1"
                arrOfValues={this.state.radioArr2}
                value={this.state.radioArr2[0]}
                selectedValue={this.state.selectedRadio2}
                onChange={(e)=>this.setState({selectedRadio2:e})}
                buttonView={(e)=>this.radioButton(e)}
            />
            <RadioButtons
                groupName="someBtns2"
                label="label 2"
                arrOfValues={this.state.radioArr2}
                value={this.state.radioArr2[1]}
                selectedValue={this.state.selectedRadio2}
                onChange={(e)=>this.setState({selectedRadio2:e})}
                buttonView={(e)=>this.radioButton(e)}
            />
            <RadioButtons
                groupName="someBtns2"
                label="label 3"
                arrOfValues={this.state.radioArr2}
                value={this.state.radioArr2[2]}
                selectedValue={this.state.selectedRadio2}
                onChange={(e)=>this.setState({selectedRadio2:e})}
                buttonView={(e)=>this.radioButton(e)}
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
