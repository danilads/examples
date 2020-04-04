import React from 'react';
import './App.css';

export type ArrType = {
  id: number
}

interface AppProps {
  name,  //any
  str?: string, //not required

  arr1?: string[] , //array of
  arr2?: Array<number>, //array of
  arr3?: (string | number)[], //array of
  arr4?: Array<string | number>, //array of

  close1?: (data) => void, //функция которая возвращает
  close2?: (data?) => void, //функция которая может что-то возвращать
  close3?: () => void, //функция ничего не возваращает

  color?: 'default' | 'inherit' | 'primary' | 'secondary',

  children?: React.ReactNode; //props.children


}
interface AppState {
  cnt: number;
}

// const App = (props: AppProps) => {
//   return (
//     <div className="App">
//       {props.name}
//     </div>
//   );
// }

// const App: React.FC<AppProps> = props => {
//   return (
//     <div className="App">
//       {props.name}
//     </div>
//   )
// }

// class App extends React.Component<AppProps> {
//   run=()=>{
//     console.log('hello');
//   }
//   render(){
//     console.log('render')
//     return(
//         <div className="App" onClick={this.run}>
//           {this.props.name}
//         </div>
//         )
//     }
// }

// const App: React.FC<AppProps> = (props) => {
//   //state
//   const [some,setSome] = React.useState('123');
//   const [cnt,setCnt] = React.useState<number>(0);
//   const [obj,setObj] = React.useState([{ text: 'Изучить хуки' }]);
//   // Аналогично componentDidMount и componentDidUpdate
//   React.useEffect(() => {
//     //event listener
//     const handler = () => {
//       console.log(window.innerHeight);
//     }

//     window.addEventListener('resize', handler);
  
//     return () => {
//       window.removeEventListener('resize', handler);
//     }
//   });
//   console.log('--rerender',cnt);
//   return (
//     <div className="App" onClick={()=>setCnt(cnt+1)}>
//       {props.name}
//     </div>
//   )
// }

// //HOOK defaultProps
// App.defaultProps = {
//   title: "Are you sure?",
//   okBtnText: 'Ok',
//   cancelBtnText: 'Cancel'
// }

class App extends React.Component<AppProps,AppState> {
  static defaultProps={
    name:'hello'
  }
  state={
    cnt:0
  }
  //REF
  container = React.createRef<HTMLInputElement>();

  set=(e:number)=>(c:any)=>{
    console.log('--wtf here',c.target);
    console.log('--wtf here',e);
    this.setState({cnt:this.state.cnt+1});
  }
  render() {
    let arr = [{id:3},{id:2},{id:9}];

    let sorted:ArrType[] = arr.sort((n1,n2) => {
        if (n1.id > n2.id) {
            return 1;
        }
        if (n1.id < n2.id) {
            return -1;
        }
    
        return 0;
    });

    console.log(sorted);
   
    return <div ref={this.container} className="App" onClick={this.set(this.state.cnt)} {...this.props}>
          {this.props.name}
      </div>
  }
}


export default App;