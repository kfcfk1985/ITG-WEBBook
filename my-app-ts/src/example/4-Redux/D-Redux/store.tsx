//定义reducer
//创建store

import { createStore } from "redux";

export enum Type {
  ADD,
  SUB,
}

export interface Action {
  type: Type;
}

function reducer(state: number = 0, action: Action) {
  switch (action.type) {
    case Type.ADD:
      return state + 1;
    case Type.SUB:
      return (state += -1);

    default:
      return state;
  }
}

export default createStore(reducer);
