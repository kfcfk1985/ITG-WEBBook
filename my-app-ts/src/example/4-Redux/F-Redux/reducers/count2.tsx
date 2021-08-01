import { ActionType, Action, State } from "../type.d";

// 初始数据
let initData: State = {
  num: 2,
};

// 创建reducer
export function count2Reducer(state: State = initData, action: Action) {
  const num = action.num || 0;
  switch (action.type) {
    case ActionType.ADD2:
      return {
        num: state.num + 1,
      };
    case ActionType.CUT2:
      return {
        num: state.num - num,
      };
    default:
      return state;
  }
}
