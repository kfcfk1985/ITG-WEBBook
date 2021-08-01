import { AgeActionType, NameActionType, Action, NameAction } from "./type.d";
import { createStore, combineReducers } from "redux";

function ageReducer(state: number = 1, action: Action<AgeActionType>) {
  console.log("ageReducer:", state);

  switch (action.type) {
    case AgeActionType.ADD:
      return state + 1;

    case AgeActionType.SUB:
      return state - 1;

    default:
      return state;
  }
}

function nameReducer(
  state: string = "lkt",
  action: NameAction<NameActionType>
) {
  console.log("nameReducer:", state);

  switch (action.type) {
    case NameActionType.SET:
      return (state = action.name);

    default:
      return state;
  }
}

//! 未解之谜：程序一旦跑起来，会发现 ageReducer 和 nameReducer 分别跑了两次
const store = createStore(
  combineReducers({
    //! 把多个 Reducer 合成一个 Reducer
    age: ageReducer,
    name: nameReducer,
  })
);

//! 建议用这种创建变量，然后导出变量的方式，因为可以看到 vsCode 解析出来之后的类型
export default store;
