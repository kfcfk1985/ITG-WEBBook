import React from "react";
import ReduxPage from "./pages/ReduxPage";
import store from "./store";

import { Provider } from "react-redux";

const Index: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <ReduxPage />
      </Provider>
    </div>
  );
};

export default Index;
