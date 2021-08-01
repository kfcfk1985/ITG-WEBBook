import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function ReduxPage(props) {
  const { num, add, sub } = props;
  return (
    <div>
      <p>{num}</p>

      <button onClick={add}>add</button>
      <button onClick={sub}>sub</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  num: state,
});
//!方式1：直接传递一个对象(成员是方法)
// const mapDispatchToProps = {
//   add: () => ({ type: "ADD" }),    //! 为什么成员要是方法呢？答：因为可能要传一些参数！！！
//   sub: () => ({ type: "SUB" }),
// };

//!方式2：传递一个函数，返回一个对象(成员是方法,需要带上  dispatch )
// const mapDispatchToProps = (dispatch) => {
//   let ret = {
//     add: () => dispatch({ type: "ADD" }),
//     sub: () => dispatch({ type: "SUB" }),
//   };

//   return ret;
// };
//!方式3：使用 bindActionCreators
// const mapDispatchToProps = (dispatch) => {
//   let ret = {
//     add: () => ({ type: "ADD" }),
//     sub: () => ({ type: "SUB" }),
//   };

//   ret = bindActionCreators(ret, dispatch);
//   return ret;
// };
//!方式4：使用 bindActionCreators 和 react-thunk
const mapDispatchToProps = (dispatch) => {
  let ret = {
    add: () => ({ type: "ADD" }),
    sub: () => {
      return async (dispatch) => {
        //! 这里可以进行一些异步操作
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
        dispatch({ type: "SUB" });
      };
    },
  };

  ret = bindActionCreators(ret, dispatch);
  return ret;
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage);
