import React, { Component } from "react";
import "./index.css";

function Child(props) {
  return <div>Child</div>;
}

//!这个就是高阶组件
const foo = (Cmp) => (props) => {
  return (
    <div className="border">
      <Cmp {...props} /> {/*  //! 组件的名字一定要首字母大写*/}
    </div>
  );
};

// const Foo = foo(Child); //! 组件的名字一定要首字母大写
const Foo = foo(foo(Child)); //! 就是链式调用
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo />
      </div>
    );
  }
}
