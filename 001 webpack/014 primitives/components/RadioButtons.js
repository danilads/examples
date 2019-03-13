import React, {PureComponent,createRef} from 'react';
import classNames from 'classnames';
import './RadioButtons.scss';
import PropTypes from 'prop-types';

//В радио подразумевается, что выбрана
class RadioButtons extends PureComponent {
  static propTypes = {
    className: PropTypes.string, //стиль
    cbClose: PropTypes.func, //колбек срабатывает при закрытии

    title: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.object,
    ]),
    dropContent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.object,
    ]),
    cbOpen: PropTypes.func, //колбек срабатывает при открытии
  };
  static defaultProps = {
    title: "title",
    dropContent: "content"
  };

  state = {
    isOpened: false,
  };

  render() {
    let {title,dropContent,className} = this.props;
    let {isOpened} = this.state;
    return (
        <div className={classNames('RadioButtons',className)}>
            radio bitches
        </div>
    );
  }

}



export default RadioButtons;