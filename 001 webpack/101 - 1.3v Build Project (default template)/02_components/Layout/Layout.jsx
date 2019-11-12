import React from 'react';
import PropTypes from 'prop-types';
import Graphic from './Graphic';

class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func
  }

  state = {
    rotation: 0
  };

  componentDidMount() {
    requestAnimationFrame(this.tick);
  }

  tick = () => {
    const { rotation } = this.state;
    this.setState({ rotation: rotation + 0.04 });
    requestAnimationFrame(this.tick);
  }

  render() {
    const { children } = this.props;
    const { rotation } = this.state;
    return (
      <div className={'Layout'} style={{ border: '3px solid red' }}>
        <div style={{ color: 'red' }}>LAYOUT</div>
        <div>
          <Graphic rotation={rotation} width={200} height={200}/>
        </div>
        <div>{children}</div>
      </div>
    );
  }
}

export default Layout;
