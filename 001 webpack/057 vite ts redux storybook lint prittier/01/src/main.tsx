import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { TestPage } from "./pages/TestPage.tsx";

import { Provider } from "react-redux";

import store from "store/store";

const App = () => {
  const element = useRoutes([
    { path: "/", element: <TestPage /> },
    { path: "test", element: <div>test</div> },
  ]);
  return element;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
