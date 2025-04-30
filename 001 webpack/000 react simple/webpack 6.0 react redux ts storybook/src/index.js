import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from 'react-router-dom';
import {TestPage} from 'pages/TestPage';
import { Provider } from 'react-redux';
import store from 'store/store';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
    let element = useRoutes([
        { path: "/", element: <TestPage />},
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
