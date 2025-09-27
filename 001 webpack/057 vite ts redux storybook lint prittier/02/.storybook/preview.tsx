import { Provider } from "react-redux";
import { store } from "../src/store/store";
import "../src/styles/index.css";

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];
