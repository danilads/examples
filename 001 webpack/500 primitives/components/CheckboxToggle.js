import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './CheckboxToggle.scss';

class CheckboxToggle extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    isChecked: PropTypes.bool,
    label: PropTypes.string,
  };
  static defaultProps = {};

  onChange=()=>{
    this.props.onChange&&this.props.onChange();
  }
  render() {
    const {className, isChecked, label} = this.props;

    return (
      <div className={classNames(className, "CheckboxToggle")}>
        <label>
            <input type={'checkbox'} checked={isChecked} onChange={this.onChange}/>
            <div>{label}</div>
            
        </label>
      </div>
    );
  }
}

export default CheckboxToggle;
