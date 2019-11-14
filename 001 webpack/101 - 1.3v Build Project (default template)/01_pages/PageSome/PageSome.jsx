import React from 'react';
import { NavLink } from 'react-router-dom';

class PageSome extends React.PureComponent {
  render() {
    const arr = [];
    for (let i = 100000; i > 0; i--) {
      arr.push(i);
    }
    return (
      <div>
        <NavLink className={'btnLevel1'} to={'/about'} activeClassName={'SActivated'}>about</NavLink>
        <div>{arr.map(it => <div key={it}>{it}</div>)}</div>
      </div>
    );
  }
}


export default PageSome;
