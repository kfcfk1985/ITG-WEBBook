import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App(props) {
  const count = useSelector((state) => state.count); //! store.state.count 映射 为 count
  const dispatch = useDispatch(); //! 返回store.dispatch

  console.log("App run"); //! 一旦 dispatch，就会修改 store中的stata，之后这个函数式组件都会运行(因为这里建立了映射)
  return (
    <div>
      {/* //!这种写法比较精简 */}
      <button onClick={dispatch.bind(null, { type: "COUNT_REDUCE" })}>-</button>

      <span>{count}</span>

      <button
        onClick={() => {
          dispatch({
            type: "COUNT_PLUS",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
export default App;
