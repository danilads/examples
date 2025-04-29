import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from 'react-router-dom';
import {Login} from './pages/Login';
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.scss';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
    let element = useRoutes([
        { path: "/", element: <Login />},
        { path: "test", element: <div>test</div>}
    ]);
    return element;
}

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
