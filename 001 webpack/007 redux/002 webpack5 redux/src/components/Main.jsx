import React from 'react';
import 'assets/scss/App.scss';
import reactLogo from 'assets/img/react_logo.svg';
import {useDispatch, useSelector} from 'react-redux';

export const Main = () => {
 
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  console.log('--+ store', store);
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Foo to the bar</p>
      <img src={reactLogo} height="480" />
    </div>
  );
} 
