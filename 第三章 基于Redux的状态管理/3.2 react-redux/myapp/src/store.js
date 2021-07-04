//! 输入store，快速创见模板（需安装：React/Redux/react-router Snippets）

import { createStore } from "redux";

function countFn(
  state = {
    count: 1,
  },
  action
) {
  switch (action.type) {
    case "COUNT_PLUS":
      return {
        ...state, //!这种写法比较稳妥
        count: state.count + 1,
      };
    case "COUNT_REDUCE":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
}
let store = createStore(countFn);
export default store;
