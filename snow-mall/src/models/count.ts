import { Effect, Reducer } from 'umi';

export interface CountModelState {
  num: number;
}

interface CountAction {
  type: string;
  playload: {
    step: number;
  };
}

export interface CountModelType {
  namespace: 'count';
  state: CountModelState;
  effects: {
    add: Effect;
    sub: Effect;
  };
  reducers: {
    addDo: Reducer<CountModelState, CountAction>;
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
    *add(action, { fork, call, put }) {
      console.log('action', action);
      const response = yield call(delay); //! call 调用  promise 的函数（进行异步操作 ）

      yield put<CountAction>({
        type: 'addDo',
        playload: action.payload,
      });
    },
    *sub(action, { fork, call, put }) {
      const response = yield call(delay);

      yield put<CountAction>({
        type: 'subDo',
        playload: action.payload,
      });
    },
  },
  reducers: {
    addDo(state, action) {
      return { num: (state?.num || 0) + action.playload.step };
    },
    subDo(state, action) {
      return { num: (state?.num || 0) - action.playload.step };
    },
  },
};
export default CountModel;
