import React, { Component } from "react";
import "./index.css";

const foo = (Cmp) => (props) => {
  return (
    <div className="border">
      <Cmp {...props} />
    </div>
  );
};

// 从下往上
@foo
@foo
class Child extends Component {
  render() {
    return <div>Child</div>;
  }
}

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Child />
      </div>
    );
  }
}
