import React, { Component } from "react";

const addBorderRed = (Comp) => (props) => {
  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <Comp {...props} />
    </div>
  );
};

const addBorderGreen = (Comp) => (props) => {
  return (
    <div style={{ border: "1px solid green", padding: "10px" }}>
      <Comp {...props} />
    </div>
  );
};

//!装饰器的执行顺序是： 从下往上（和函数的调用顺序类似）
@addBorderRed
@addBorderGreen
class Child extends Component {
  render() {
    return <div>Child</div>;
  }
}

class Index extends Component {
  render() {
    return (
      <div>
        <Child />
      </div>
    );
  }
}

export default Index;
