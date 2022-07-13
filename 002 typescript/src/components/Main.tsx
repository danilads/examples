import React, {FC, MouseEvent, ReactNode, ReactElement} from 'react';
import '../assets/scss/App.scss';
import reactLogo from '../assets/img/react_logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading, asyncFetchItems} from '../../redux/reducers/items'
import {TypeState, TypeDispatch} from '../../redux/store'

interface Props {
  name?: string;
}
/// -------------
/// --- [TYPE / INTERFACE]
type group = {
  id: string;
  name: string;
};

interface Global {
  groups: group[];
  total: string;
  assignes?: {[key: string]: Array<string>};
}

/// -------------
/// --- [FUNCTIONS]

type TypeEmptyFunc = () => void;
type TypeFunc = (str: string) => void;
type TypeFuncReturn = () => number;
type TypeAsyncFunction = () => Promise<void>;
type TypeClickEvent = (event: MouseEvent) => void;
type TypeFuncJSX = (jsx: ReactElement) => void;
type TypeFuncTag = (jsx: ReactNode) => void;

/// -------------
/// --- [ENUM]

enum TypeEnum {
  TABLE = 'TABLE',
  COVER = 'COVER',
  INFO = 'INFO'
}

// TypeSimple = 'TABLE' | 'COVER' | 'INFO' ;
type TypeSimple = keyof typeof TypeEnum;

export const EnumKeys = {
  [TypeEnum.TABLE]: false,
  [TypeEnum.COVER]: false,
};

/// -------------
/// --- [EXTENDS]

type Event = {
  name: string;
  dateCreated: string;
  type: string;
};

interface UserEvent extends Event {
  UserId: string;
}

/// -------------
/// --- [OMIT - remove]
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

/// -------------
/// --- [Partial]

interface Todo {
  title: string;
  description: string;
}

// todo | description
type PartialTodo = Partial<Todo>;


export const Main: FC<Props> = ({name}) => {
  const dispatch = useDispatch<TypeDispatch>();
  const isLoading = useSelector((state: TypeState) => state.items.isLoading);

  const emptyFunc: TypeEmptyFunc = () => {
    console.log('--+ emptyFunc');
  };

  const func: TypeFunc = str => {
    console.log('--+ func', str);
  };

  const funcReturn: TypeFuncReturn = () => {
    return 1;
  };

  const asyncFunc: TypeAsyncFunction = async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
  };

  const clickFunc: TypeClickEvent = event => {
    event.preventDefault();
  };

  const sendJSX: TypeFuncJSX = jsx => {
    console.log('--+ jsx', jsx);
  };

  const sendTag: TypeFuncTag = jsx => {
    console.log('--+ jsx', jsx);
  };
  return (
    <div className='app'>
      <button onClick={() => dispatch(asyncFetchItems('id321'))}>async action</button>
      <button onClick={() => dispatch(setLoading({isLoading: !isLoading}))}>set in redux</button>
      <div>{isLoading ? 'loading' : 'stop loading'}</div>
      

      <div>
        <div onClick={() => emptyFunc()}>emptyFunc</div>
        <div onClick={() => func('str')}>func</div>
        <div onClick={funcReturn}>funcReturn</div>
        <div onClick={asyncFunc}>asyncFunc</div>
        <div onClick={clickFunc}>clickFunc</div>
        <div onClick={() => sendJSX(<Main />)}>clickFunc</div>
        <div onClick={() => sendTag(<div />)}>clickFunc</div>
      </div>
    </div>
  );
} 
