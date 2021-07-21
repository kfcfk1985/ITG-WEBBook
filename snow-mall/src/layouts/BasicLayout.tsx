import React, { useEffect } from 'react';
import { connect } from 'umi';
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';
import BottomNav from '@/components/BottomNav';
import '@/static/iconfont/iconfont.css';
import styles from './BasicLayout.less';

interface BasicLayoutProps extends ConnectProps {
  user: UserModelState;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { children, location, dispatch, user } = props;

  useEffect(() => {
    // 获取用户基本信息
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',    //! 调用 effects。(相当于 vuex 中发一个dispatch 到 Action)
      });
    }
  }, []);//! 没有依赖，相当于 componentDidMount,componentWillUnMount

  const { pathname } = location;
  const showBottomNav = pathname !== '/login';
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>{showBottomNav && <BottomNav pathname={pathname} />}</footer>
    </div>
  );
};

export default connect(
   //! 传入参数对象的结构可以看一下 ConnectState 的定义(根据 models 文件夹中的文件名生成) 
  ({ user }: ConnectState) => ({ user }) //! 把 user 映射到 组件 props.user
  )(BasicLayout);
