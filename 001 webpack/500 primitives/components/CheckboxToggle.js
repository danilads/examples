import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './CheckboxToggle.scss';

class CheckboxToggle extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isChecked: PropTypes.bool,
    label: PropTypes.string,
  };
  static defaultProps = {};

  render() {
    const {className, isChecked, label} = this.props;

    return (
      <div className={classNames(className, "ToggleButton", isChecked ? style.btnRadioChecked : style.btnRadioChecked)}>
        <label>
            <input type={'checkbox'} onChange={console.log}/>
            <div>{label}</div>
            
        </label>
      </div>
    );
  }
}

export default CheckboxToggle;
