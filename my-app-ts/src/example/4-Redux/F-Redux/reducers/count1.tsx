import { ActionType, Action, State } from "../type.d";

// 初始数据
let initData: State = {
  num: 1,
};

// 创建reducer
export function count1Reducer(state: State = initData, action: Action) {
  switch (action.type) {
    case ActionType.ADD1:
      return {
        num: state.num + 1,
      };
    case ActionType.CUT1:
      const num = action.num || 0;

      return {
        num: state.num - num,
      };
    default:
      return state;
  }
}
