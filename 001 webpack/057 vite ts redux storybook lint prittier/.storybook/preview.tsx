import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];
