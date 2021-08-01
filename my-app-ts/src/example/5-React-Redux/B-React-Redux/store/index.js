import { createStore } from "redux";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1; // ! 安装 Better Comments 插件，注析加 ！就可以变红

    case "MINUS":
      return state - 1;

    default:
      return state;
  }
}

const store = createStore(counterReducer);
export default store;
