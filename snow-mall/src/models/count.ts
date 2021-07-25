import { Effect, Reducer } from 'umi';

export interface CountModelState {
  num: number;
}

export interface CountModelType {
  namespace: 'count';
  state: CountModelState;
  effects: {
    add: Effect;
    sub: Effect;
  };
  reducers: {
    addDo: Reducer<CountModelState>;
    subDo: Reducer<CountModelState>;
  };
}

function delay(millisecond: number = 2000) {
  return new Promise((reslove, reject) => {
    setTimeout(reslove, millisecond);
  });
}

const CountModel: CountModelType = {
  namespace: 'count',
  state: {
    num: 0,
  },
  effects: {
    *add(_, { fork, call, put }) {
      const response = yield call(delay); //! call 调用  promise 的函数（进行异步操作 ）

      yield put({
        type: 'addDo',
      });
    },
    *sub(_, { fork, call, put }) {
      const response = yield call(delay);

      yield put({
        type: 'subDo',
      });
    },
  },
  reducers: {
    addDo(state, action) {
      return { num: (state?.num || 0) + 1 };
    },
    subDo(state, action) {
      return { num: (state?.num || 0) - 1 };
    },
  },
};
export default CountModel;
