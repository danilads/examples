import React from 'react';

class Main extends React.PureComponent {
  render() {
    // console.log('--helo2');
    const str = '123';
    const n = `${str}4`;
    return (
      <div>
        {true && <div>{n}</div>}
      </div>
    );
  }
}

export default Main;
