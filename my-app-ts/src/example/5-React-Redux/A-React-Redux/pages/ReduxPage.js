import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxPage extends Component {
  add = () => {
    this.props.dispatch({
      type: "ADD",
    });
  };

  render() {
    console.log("this.props", this.props);
    const { num } = this.props;

    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{num}</p>
        <button onClick={this.add}>加</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({ num: state }) //! mapStateToProps:把state映射到props
  //! mapDispatchToProps:若设为空，则默认把dispatch映射到props
)(ReduxPage);
