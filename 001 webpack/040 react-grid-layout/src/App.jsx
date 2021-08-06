import React from 'react';
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
