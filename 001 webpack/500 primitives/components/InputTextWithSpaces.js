import React, {PureComponent,createRef} from 'react';
import classNames from 'classnames';
import './InputTextWithSpaces.scss';
import PropTypes from 'prop-types';

import InputSpacesHoc from '../hoc/InputSpacesHoc';

class InputTextWithSpaces extends PureComponent {
  static propTypes = {
    customView: PropTypes.func
  };

  changeRadio=()=>{
    //console.log('--it works?',this.props.value);
    this.props.onChange(this.props.value);
  }
  render() {
    let {className} = this.props;

    return (
        <div className={classNames('RadioButtons', className)}>
            some input
        </div>
    );
  }

}



export default InputTextWithSpaces;