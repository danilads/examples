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
//     return(
//         <div className="App" onClick={this.run}>
//           {this.props.name}
//         </div>
//         )
//     }
// }

const App: React.FC<AppProps> = (props) => {
  //state
  const [some,setSome] = React.useState('123');
  const [text,setText] = React.useState('some');
  const [obj,setObj] = React.useState([{ text: 'Изучить хуки' }]);

  // Аналогично componentDidMount и componentDidUpdate
  React.useEffect(() => {
    //event listener
    const handler = () => {
      console.log(window.innerHeight);
    }

    window.addEventListener('resize', handler);
  
    return () => {
      window.removeEventListener('resize', handler);
    }
  });

  return (
    <div className="App" onClick={()=>console.log(some)}>
      {props.name}
    </div>
  )
}

// export class App extends React.Component<AppProps,AppState> {
//   state={
//     cnt:0
//   }

//   render() {
//     console.log('--state',this.state);
//     return <div className="App" onClick={()=>this.setState({cnt:this.state.cnt+1})}>
//           {this.props.name}
//       </div>
//   }
// }


export default App;