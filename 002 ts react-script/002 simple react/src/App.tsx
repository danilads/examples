import React from 'react';
import './App.css';

interface AppProps {
  name: string;
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

  const [some] = React.useState('123');
  return (
    <div className="App" onClick={()=>console.log(some)}>
      {props.name}
    </div>
  )
}


export default App;