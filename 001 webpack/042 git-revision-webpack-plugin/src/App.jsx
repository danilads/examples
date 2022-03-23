import React from 'react';
import './assets/scss/App.scss';
import Main from './components/Main';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    // from webpack
    console.log('--+ TEST', TEST);
    console.log('--+ gitRevisionPlugin', gitRevisionPlugin);
    console.log('--+ VERSION', VERSION);
    console.log('--+ COMMITHASH', COMMITHASH);
    console.log('--+ BRANCH', BRANCH);
    console.log('--+ LASTCOMMITDATETIME', LASTCOMMITDATETIME);

    return (
      <BrowserRouter>
        <Route exact path="/" component={Main} />
      </BrowserRouter>
    );
  }
}

export default App;
