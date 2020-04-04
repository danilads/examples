import React, { Component, useState } from 'react';
import { connect, useSelector, useDispatch, ConnectedProps } from 'react-redux';
import {
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './actionReducer';
import { RootState } from './store';

import styles from './Counter.module.css';


//HOOK VERSION
// function App() {
//   const count = useSelector(selectCount); // нужен для чтения из редакса

//   const dispatch = useDispatch(); // инициализируем dispatch

//   console.log('--count',count);
//   return (
//     <div>

//       <div className={styles.row}>
//         <span className={styles.value}>{count}</span>
//       </div>

//       <div className={styles.row}>
//         <button className={styles.button} onClick={() => dispatch(increment())}>
//           Increment (1)
//         </button>
//         <button className={styles.button} onClick={() => dispatch(incrementByAmount(2))}>
//           Add Amount (2)
//         </button>
//         <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(2))}>
//           Add Async (2)
//         </button>
//       </div>

//     </div>
//   );
// }


// export default App;

////----
////----
////----

//подключения RootState из store
const mapState = (state:RootState) => ({
  count: state.counter.value
})

const mapDispatch = {
  increment,
  incrementByAmount,
  incrementAsync
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type AppProps = PropsFromRedux & {
  //дополнительные пропсы которые не пошли в redux
  //some: string;
}


//COMPONENT VERSION
class App extends Component<AppProps>{

    render() {
        let {count,increment,incrementByAmount,incrementAsync} = this.props;
        console.log('-count',count);

        return(
          <div>

            <div className={styles.row}>
              <span className={styles.value}>{count}</span>
            </div>
      
            <div className={styles.row}>
              <button className={styles.button} onClick={() => increment()}>
                Increment (1)
              </button>
              <button className={styles.button} onClick={() => incrementByAmount(2)}>
                Add Amount (2)
              </button>
              <button className={styles.asyncButton} onClick={() => incrementAsync(2)}>
                Add Async (2)
              </button>
            </div>
      
          </div>
        )
    }
}


export default connector(App);