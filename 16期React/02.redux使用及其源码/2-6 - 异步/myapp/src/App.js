import logo from "./logo.svg";
import "./App.css";

import store from "./store";

import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(store.getState());

  const add = () => {
    store.dispatch({ type: "ADD" });
  };
  const addSync = () => {
    store.dispatch(async (dispatch) => {
      //! 使用thunk中间间后，dispatch 的参数可以为函数
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      dispatch({ type: "ADD" });
    });
  };

  useEffect(() => {
    store.subscribe(() => {
      setCount(store.getState());
    });
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{count}</p>

        <button onClick={add}>Add</button>
        <button onClick={addSync}>Add Sync</button>
      </header>
    </div>
  );
}

export default App;
