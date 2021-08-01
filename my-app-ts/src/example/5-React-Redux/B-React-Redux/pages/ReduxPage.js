import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxPage extends Component {
  render() {
    console.log("this.props", this.props);
    const { num, add, minus } = this.props;

    return (
      <div>
        <h3>ReactReduxPage2</h3>
        <p>{num}</p>
        <button onClick={add}>加</button>
        <button onClick={minus}>减</button>
      </div>
    );
  }
}

export default connect((state) => ({ num: state }), {
  add: () => ({ type: "ADD" }), //! mapDispatchToProps:把 add 映射到props,add会调用dispatch
  minus: () => ({ type: "MINUS" }),
})(ReduxPage);
