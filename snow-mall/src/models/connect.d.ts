// model state 类型
import { UserModelState } from './user';
import { Location, Dispatch } from 'umi';
import { CartModelState } from './cart';
import { CountModelState } from './count';

//! 这里只是定义一个接口，表示 props 中带有 location 和 dispatch两个属性（应该是umi注入到props中的）
export interface ConnectProps {
  //! 和 useLocation 函数返回的 location 一样
  //! 告诉编译器：location带有 state 属性，state属性是一个对象，肯定带有 为string 类型的from 属性
  location: Location & { state: { from: string } };
  dispatch: Dispatch; //! 和 useDispatch 返回的 dispatch一样
}

export interface ConnectState {
  user: UserModelState;
  cart: CartModelState;
  count: CountModelState;
}

export { UserModelState };
export { CartModelState };
export { CountModelState };
