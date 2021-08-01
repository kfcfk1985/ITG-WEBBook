import React from "react";
import { Action, ActionType, useTypedSelector } from "../store";
import { useDispatch } from "react-redux";

import { Dispatch } from "redux";

const ReduxPage: React.FC = () => {
  const count = useTypedSelector((state) => state.count);

  const dispatch = useDispatch();

  console.log("知识点：");
  console.log("1.react-redux的使用：");
  console.log(" A.dispatch(对象的方式)");
  console.log(" B.dispatch.bind的方式()");
  console.log("2.redux-thunk的使用：dispatch(函数的方式)");

  const add2 = () => {
    return async (dispatch: Dispatch<Action>) => {
      // !模拟异步
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      dispatch({ type: ActionType.ADD });
    };
  };

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          //!dispatch(对象的方式)
          dispatch({ type: ActionType.ADD });
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
          //!dispatch(函数的方式)
          dispatch(add2());
        }}
      >
        Add2
      </button>

      {/*  //!dispatch.bind的方式() */}
      <button onClick={dispatch.bind(null, { type: ActionType.SUB })}>
        Sub
      </button>
    </div>
  );
};

export default ReduxPage;
