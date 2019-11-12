import React from 'react';
import PropTypes from 'prop-types';

class Graphic extends React.Component {
  container = React.createRef();

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    rotation: PropTypes.number
  }

  componentDidUpdate() {
    this.paint();
  }

  paint = () => {
    const { width, height, rotation } = this.props;
    const context = this.container.current.getContext('2d');
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(100, 100);
    context.rotate(rotation, 100, 100);
    context.fillStyle = '#F00';
    context.fillRect(-50, -50, 100, 100);
    context.restore();
  }

  render() {
    const { width, height, rotation } = this.props;
    console.log('--rotation', Math.round(rotation));
    return (
      <canvas
        style={{ paddingLeft: `${rotation}px` }}
        ref={this.container}
        width={width}
        height={height}
      />
    );
  }
}

export default Graphic;
