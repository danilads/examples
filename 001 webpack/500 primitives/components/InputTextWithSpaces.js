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
    value: "",
  }
  containerRef = {};
  dirtyValue = "";

  render() {
    let {className} = this.props;
    let value = this.state.value;
    let result = reactRefModifyStr([{reg:"^[0-9]+$",symbol:"@"}], this.containerRef, "ᾩᾩ-ᾩᾩ", value, false);
    this.dirtyValue = result.dirtyVal;

    console.log('--state value', this.state.value);
    console.log('--dirtyValue', this.dirtyValue);
 

    return (
        <div className={classNames('InputTextWithSpaces', className)}>
            <input type="text" value={result.clearVal} onChange={(e)=>this.setState({value:e.target.value})} ref={(el)=>this.containerRef=el}/>
        </div>
    );
  }

}



export default InputTextWithSpaces;