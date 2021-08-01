import React from "react";

import ReduxPage from "./pages/ReduxPage";

import store from "./store";
import { Provider } from "react-redux";

console.log("TypedUseSelectorHook的使用");
const App: React.FC = () => (
  <Provider store={store}>
    <ReduxPage />
  </Provider>
);

export default App;
