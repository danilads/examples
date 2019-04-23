import React, {Fragment ,PureComponent} from 'react';

import Dropdown from './Dropdown';
import RadioButtons from './RadioButtons';
import InputMasked from './InputMasked';
class AaaMainPage extends PureComponent {
    state={
        content:1,
        //Dropdown
        isOpened: false,
        //RadioButtons
        selectedRadio: "1",
        selectedRadio2: "1",
        //InputMasked
        inputMaskedText: "",

    }
    //Dropdown
    refBtn1=React.createRef();
    refBtn2=React.createRef();
    dropControlled=(e)=>{
          this.setState({isOpened:e});
    }
    showDropdown=()=>{
        return <Fragment>
                {/* typeof title = 'string' */}
                <input ref={this.refBtn1} type={"button"} onClick={()=>{this.setState({isOpened:true})}} value="Force Open First"/>
                <input ref={this.refBtn2} type={"button"} onClick={()=>{this.setState({isOpened:!this.state.isOpened})}} value="Toggle First"/>
                <Dropdown title={'CONTROLED'} arrButtonsRef={[this.refBtn1,this.refBtn2]} dropContent={'CONTROLED'} isOpened={this.state.isOpened} controlFunction={(e)=>this.setState({isOpened:e})}/>

                {/* typeof title = 'object' */}
                <Dropdown
                    title={<div><input type={"checkbox"} onClick={(e)=>{
                        
                        e.stopPropagation();
                    }}/></div>}
                    dropContent={<div><br/>hello<hr/></div>}
                />

                {/* typeof title = 'function' */}
                <Dropdown
                    title={(e)=>{
                        return <div>{e.isOpened?'открыто':'закрыто'}</div>
                    }}
                    dropContent={<div>content</div>}
                />
        </Fragment>
    }
    //Radio
    radioButton=(e)=>{
        return <span style={{border:"1px solid black"}}>
            <span style={e.disabled?{color:'gray'}:(e.isChecked?{color:'red'}:{})}>button</span>
        </span>
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
                disabled
                
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
                disabled
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
    //InputMasked
    setInputMaskedText=(e)=>{
        this.setState({inputMaskedText:e});
    }
    showInputMasked=()=>{

        return <Fragment>
            <InputMasked onChange={this.setInputMaskedText} value={this.state.inputMaskedText} maxLength={12}/>
        </Fragment>
    }
  	render() {
		return (
            <Fragment>
                <div style={{marginBottom:"20px"}}>
                    <button onClick={()=>{this.setState({content:1})}}>Dropdown</button>
                    <button onClick={()=>{this.setState({content:2})}}>RadioButtons</button>
                    <button onClick={()=>{this.setState({content:3})}}>InputMasked</button>
                

                </div>
                <div>
                    {this.state.content===1&&this.showDropdown()}
                    {this.state.content===2&&this.showRadioButtons()}
                    {this.state.content===3&&this.showInputMasked()}
                </div>
            </Fragment>
		);
  	}

}



export default AaaMainPage;
