import { createStore, combineReducers } from "redux";

export const TYPE = {
  AGE: {
    ADD: "AGE_ADD",
    SUB: "AGE_SUB",
  },
  NAME: {
    SET: "NAME_SET",
  },
};

function ageReducer(state = 1, action) {
  console.log("ageReducer:", state);

  switch (action.type) {
    case TYPE.AGE.ADD:
      return state + 1;

    case TYPE.AGE.SUB:
      return state - 1;

    default:
      return state;
  }
}
function nameReducer(state = "lkt", action) {
  console.log("nameReducer:", state);

  switch (action.type) {
    case TYPE.NAME.SET:
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

export default store;
