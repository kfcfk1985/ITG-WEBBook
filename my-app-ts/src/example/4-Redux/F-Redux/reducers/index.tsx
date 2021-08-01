// 需要合并两个小的reucer
import { Action, State, FinalState } from "../type.d";

import { count1Reducer } from "./count1";
import { count2Reducer } from "./count2";

let initData: FinalState<State> = {
  count1: {
    num: 0,
  },

  count2: {
    num: 0,
  },
};

// 将两个小的 reducer 合并成一个大的reducer
export default function main(
  state: FinalState<State> = initData,
  action: Action
) {
  let finalState: FinalState<State> = {} as FinalState<State>;

  finalState.count1 = count1Reducer(state.count1, action);
  finalState.count2 = count2Reducer(state.count2, action);

  return finalState;
}
