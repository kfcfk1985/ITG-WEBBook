import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
export interface State {
  count: number;
}
export interface Action<T = ActionType> {
  type: T;
  value?: number;
}
export enum ActionType {
  ADD = "ActionType_ADD",
  SUB = "ActionType_SUB",
}

const initState: State = { count: 0 };

const reducerName = (state: State = initState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD:
      return { ...state, count: state.count + 1 };

    case ActionType.SUB:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

type RootState = ReturnType<typeof reducerName>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const store = createStore(reducerName, applyMiddleware(thunk));
export default store;
