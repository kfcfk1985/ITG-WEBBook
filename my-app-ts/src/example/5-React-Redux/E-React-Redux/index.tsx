import React from "react";

import {
  Provider,
  useSelector,
  useDispatch,
  TypedUseSelectorHook, //! 用于定义自己的 useSelector
} from "react-redux";
import { createStore } from "redux";

const rootReducer = (
  state = {
    count: 0,
  },
  action: { type: string; value: number }
) => {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + 1 };
    case "reduce":
      return { ...state, count: state.count - 1 };
    case "initial":
      return { ...state, count: action.value };
    default:
      return state;
  }
};

type RootState = ReturnType<typeof rootReducer>;
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; //! 这里定义 useTypedSelector。useTypedSelector 其实和 useSelector一样，只是类型不一样

const store = createStore(rootReducer);

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

console.log("TypedUseSelectorHook的使用");
const App: React.FC = () => (
  <Provider store={store}>
    <Count />
  </Provider>
);

export default App;
