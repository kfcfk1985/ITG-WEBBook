import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

function reducerName(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;

    case "SUB":
      return state - 1;

    default:
      return state;
  }
}

const store = createStore(reducerName, applyMiddleware(thunk));

export default store;
