// 需要合并两个小的reucer
import { count1Reducer } from "./count1";
import { count2Reducer } from "./count2";

// 将两个小的 reducer 合并成一个大的reducer
export default function main(state = {}, action) {
  let finalState = {};
  finalState.count1 = count1Reducer(state.count1, action);
  finalState.count2 = count2Reducer(state.count2, action);
  return finalState;
}
