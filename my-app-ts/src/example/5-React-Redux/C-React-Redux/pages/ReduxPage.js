import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxPage extends Component {
  render() {
    console.log("this.props", this.props);
    const { num, add, minus } = this.props;

    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{num}</p>
        <button onClick={add}>加</button>
        <button onClick={minus}>减</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({ num: state }),
  (dispatch, ownProps) => {
    let res = {
      add: () => dispatch({ type: "ADD" }),
      minus: () => dispatch({ type: "MINUS" }),
    };

    return {
      dispatch,
      ...res,
    };
  }
)(ReduxPage);
