//! ok1
import React, { useState } from "react";
import { useDispatch } from "react-redux";
function Create() {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();

  return (
    <div id="create-todo">
      <input
        id="new-todo"
        placeholder="请输入要完成的事项"
        autoComplete="off" // ! autocomplete 属性规定输入字段是否应该启用自动完成功能。自动完成允许浏览器预测对字段的输入。
        type="text"
        value={val}
        onChange={({ target }) => {
          setVal(target.value); //! 一旦运行这里，这个函数式组件将会重新运行。但 useState创建的变量，是有记录的
        }}
        //! onkeydown 事件会在用户按下一个键盘按键时发生。
        onKeyDown={({ keyCode }) => {
          //! trim函数用于去除前后空格，这里表示去除空格后，不为空
          if (keyCode === 13 && val.trim()) {
            dispatch({
              type: "TODO_ADD",
              title: val,
            });
            setVal("");
          }
        }}
      />
    </div>
  );
}
export default Create;
