import React, {PureComponent,createRef} from 'react';
import classNames from 'classnames';
import './InputTextWithSpaces.scss';
import PropTypes from 'prop-types';
import {reactRefModifyStr} from "../utils/utils";

class InputTextWithSpaces extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    customView: PropTypes.func,
  };

  state={
    //кейсы isDirty -22-22
    value: "",
    //value: "-"
    //value: "-2"
    //value: "-22"
    //value: "-22-"
    //value: "-22-33"
    //value: "-22-33--"
    //value: "d22-ed"
    //value: "d22-ed"

    //кейсы Clear -22-22
    //value: "",
    //value: "2"
    //value: "22"
    //value: "2222"
    //value: "-22-2"
    //value: "-22-33"
    //value: "-22-33--"
    //value: "d22-ed"
    //value: "d22-ed22"
  }

  containerRef = {};
  clearValue = "";

  render() {
    let {className} = this.props;
    let value = this.state.value;
    let result = reactRefModifyStr([{reg:"^[0-9]+$",symbol:"@"}], this.containerRef, "-@@-@@", value, false, 0, true);
    this.clearValue = result.clearVal;

    // console.log('--state value', this.state.value);
    // console.log('--clearValue', this.clearValue);
 

    return (
        <div className={classNames('InputTextWithSpaces', className)}>
            <input type="text" value={result.dirtyVal} onChange={(e)=>this.setState({value:e.target.value})} ref={(el)=>this.containerRef=el}/>
        </div>
    );
  }

}



export default InputTextWithSpaces;