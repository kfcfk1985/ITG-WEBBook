//! ok
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
function Li(props) {
  let { id, title, done } = props;
  const [isEdit, changeEdit] = useState(false);
  const dispatch = useDispatch();
  let edit = useRef(); //! useRef的使用：1、创建ref
  let [val, setVal] = useState(title);

  useEffect(() => {
    if (isEdit) {
      edit.current.focus(); //! useRef的使用：3、使用 ref.current引用dom节点
    }
  }, [isEdit]);

  return (
    <li>
      <div className={"todo " + (done ? "done" : "")}>
        <div className="display">
          {/* 勾选 */}
          <input
            className="check"
            type="checkbox"
            checked={done}
            onChange={({ target }) => {
              dispatch({
                type: "TODO_DONE",
                id,
                done: target.checked,
              });
            }}
          />

          {/* 内容 */}
          <div
            className="todo-content"
            onDoubleClick={() => {
              changeEdit(true);
            }}
          >
            {title}
          </div>

          <span
            className="todo-destroy"
            onClick={() => {
              dispatch({
                type: "TODO_REMOVE",
                id,
              });
            }}
          ></span>
        </div>

        {isEdit && (
          <div className="edit">
            <input
              className="todo-input"
              type="text"
              ref={edit} //! useRef的使用：2、和节点绑定
              value={val}
              onChange={({ target }) => {
                setVal(target.value);
              }}
              onBlur={() => {
                //! trim函数用于去除前后空格，这里表示去除空格后，不为空
                if (val.trim()) {
                  dispatch({
                    type: "TODO_EDIT",
                    id,
                    title: val,
                  });
                } else {
                  setVal(title); //!为空，用原来的数据还原
                }
                changeEdit(false);
              }}
            />
          </div>
        )}
      </div>
    </li>
  );
}
export default Li;
