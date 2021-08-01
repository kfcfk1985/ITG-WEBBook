import ReduxPage from "./pages/ReduxPage";

import store from "./store";
import { Provider } from "react-redux";

export default function Main() {
  return (
    <Provider store={store}>
      <ReduxPage />
    </Provider>
  );
}
