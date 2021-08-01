import {createStore} from "redux";

//! B.	定义reducer 初始化、修改状态函数:用于定义修改规则的
function counterReducer(state = 0, action) {
    console.log('state', state); //! Reducer是一个纯函数，不能在里面打印log，这里是为了展示用，所以才打了个log

    switch (action.type) {
        case "ADD":
            return state + 1;

        case "MINUS":
            return state - 1;

        default:
            return state
    }
}

//! A.	createStore 创建 store
const store = createStore(counterReducer)
export default store;
