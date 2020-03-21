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

const App: React.FC<AppProps> = props => {
  return (
    <div className="App">
      {props.name}
    </div>
  )
}

export default App;