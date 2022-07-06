import React from 'react';
import 'assets/scss/App.scss';
import reactLogo from 'assets/img/react_logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading, asyncFetchItems} from '../../redux/reducers/items'
export const Main = () => {
 
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.items.isLoading);

  return (
    <div>
      <button onClick={() => dispatch(asyncFetchItems('id321'))}>async action</button>
      <button onClick={() => dispatch(setLoading({isLoading: !isLoading}))}>set in redux</button>
      <div>{isLoading ? 'loading' : 'stop loading'}</div>
      <h1>Hello World!</h1>
      <p>Foo to the bar</p>
      <img src={reactLogo} height="480" />
    </div>
  );
} 
