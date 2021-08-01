import {
  useSelector,
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
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; //! 这里定义 useTypedSelector。useTypedSelector 其实和 useSelector一样，只是类型不一样

const store = createStore(rootReducer);
export default store;
