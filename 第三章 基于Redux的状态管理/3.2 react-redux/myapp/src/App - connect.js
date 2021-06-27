//! 输入rfcr，快速创见一个使用react-redux的函数式组件。（需安装：React/Redux/Typescript/Javascript/Omi snippets）

import React from "react";
import { connect } from "react-redux";
function App(props) {
  let { count, dispatch } = props;
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "COUNT_REDUCE",
          });
        }}
      >
        -
      </button>
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
//! connect的第二个参数不填的话，默认把 dispatch 添加到 props 中
// App = connect((state) => state)(App);

//! 建议用下面的方式，更明确
const mapStateToProps = (state) => state;
const mapDispatchToProps = {}; //! 这里为空，若也赋值给 connect，即： App = connect(mapStateToProps,mapDispatchToProps)(App) ，则不会把dispatch 添加到 props 中

App = connect(mapStateToProps)(App);
export default App;
