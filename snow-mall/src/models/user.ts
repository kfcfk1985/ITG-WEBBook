import { Effect, Reducer } from 'umi';
import { queryCurrent, queryDetail, fakeAccountLogout } from '@/services/user';
import { fakeAccountLogin } from '@/services/login';
import { Toast } from 'antd-mobile';
import Icon from '@ant-design/icons/lib/components/AntdIcon';

interface CurrentUser {
  name?: string;
  icon?: string;
  userid?: string;
}

interface DetailUser {
  name: string;
  icon: string;
  userid: string;
  email: string;
  phone: string;
  address: string;
  signature?: string;
  title?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  country: string;
}

export interface UserModelState {
  currentUser: CurrentUser;
  detail:
    | DetailUser
    | {
        name: string;
        icon: string;
      };
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchCurrent: Effect;
    login: Effect;
    queryDetail: Effect;
    logout: Effect;
  };
  reducers: {
    saveUser: Reducer<UserModelState>;
    clearUser: Reducer<UserModelState>;
  };
}

function queryCurrentMock() {
  return {
    status: 1,
    name: '莎士比亚',
    icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
    userid: '001',
  };
}
function queryCurrentMock2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status: 1,
        name: '莎士比亚',
        icon:
          'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
        userid: '001',
      });
    }, 2000);
  });
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    currentUser: {},
    detail: {
      name: '',
      icon: '',
    },
  },
  //! eﬀect 是一个 javascript 对象，里面包含描述副作用的信息。(相当于 vuex 中的 Action)
  effects: {
    *fetchCurrent(_, { fork, call, put }) {
      //! fork 无阻塞型调用.（类似创建另一个进程，和setTimeout类似）它会将任务启动并且不阻塞代码的执行，fork会返回一个task，可以用cancel（task）来取消任务（所以不能接收任务的返回值）
      //! call 是阻塞型调用，即call是有阻塞地调用返回值为 promise 的函数或一般的函数
      const response = yield call(queryCurrent); //! call 调用  promise 的函数（进行异步操作 ）
      // const response = yield call(queryCurrentMock); //! call 调用 一般的函数
      // const response = queryCurrentMock();
      console.log('response', response);

      //! put :作用和 redux 中的 dispatch 相同。会传送到去  reducers。(相当于 vuex 中 发一个 Commit 到 Mutation)
      yield put({
        type: 'saveUser',
        payload: { currentUser: { ...response } },
      });
    },
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveUser',
          payload: { currentUser: { ...response } },
        });
      } else {
        Toast.fail(response.msg || '系统开小差，请稍后再试~');
      }
    },
    *queryDetail(_, { call, put }) {
      const response = yield call(queryDetail);
      yield put({ type: 'saveUser', payload: { detail: { ...response } } });
    },
    *logout(_, { call, put }) {
      const response = yield call(fakeAccountLogout);
      yield put({
        type: 'clearUser',
        payload: { currentUser: {}, detail: { name: '', icon: '' } },
      });
    },
  },
  //! (相当于 vuex 中的 Mutate，修改 State 的值 )
  reducers: {
    saveUser(
      state, //! 这个state 是store传递进来的
      action,
    ) {
      return { ...state, ...action.payload };
    },
    clearUser(state, action) {
      return { ...action.payload };
    },
  },
};
export default UserModel;
