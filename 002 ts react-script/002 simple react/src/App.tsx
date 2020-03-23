import React from 'react';
import './App.css';

interface AppProps {
  name: string;
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

class App extends React.Component<AppProps,AppState> {
  state={
    cnt:0
  }
  set=(e:number)=>(c:any)=>{
    console.log('--wtf here',c.target);
    console.log('--wtf here',e);
    this.setState({cnt:this.state.cnt+1});
  }
  render() {
    console.log('--state',this.state);
    return <div className="App" onClick={this.set(this.state.cnt)}>
          {this.props.name}
      </div>
  }
}


export default App;