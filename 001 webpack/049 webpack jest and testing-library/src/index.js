import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from 'react-router-dom';


import './index.scss';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Switcher
// -- extend Ex01 / Ex02 here
import Ex00 from './components/Ex00';

const Switcher = () => {
  const [selected, setSelected] = React.useState(0);

  // -- extend Ex01 / Ex02 here
	const arr = [0];

  return (
    <div>
      <select value={selected} onChange={(e)=>{setSelected(+e.target.value)}}>
        {arr.map(it => (<option key={it} value={it}>{`ex${it}`}</option>))}
      </select>
      <div>
        {/* -- extend Ex01 / Ex02 here */}
        {selected===0 && <Ex00/>}
      </div>
    </div>
  );
};

const App = () => {
    let element = useRoutes([
        { path: "/", element: <Switcher /> },
    ]);

    return element;
}

root.render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>
);
