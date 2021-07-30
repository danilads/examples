import React from 'react';
import './assets/scss/App.scss';
import Main from './components/Main';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Main} />
      </BrowserRouter>
    );
  }
}

export default App;
