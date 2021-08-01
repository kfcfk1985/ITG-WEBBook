import React from "react";

import { useTypedSelector } from "../store";
import { useDispatch } from "react-redux";

const Count: React.FC = () => {
  const count = useTypedSelector((state) => state.count);
  const dispatch = useDispatch();
  const addcount = { type: "add" };
  const reduceCount = { type: "reduce" };
  const initial = { type: "initial", value: 0 };

  return (
    <div>
      {count}
      <button
        onClick={() => {
          dispatch(addcount);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(reduceCount);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(initial);
        }}
      >
        =
      </button>
    </div>
  );
};

export default Count;
