import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    console.log("this.props", this.props);

    return (
      <div>
        <h3>HomaPage</h3>
      </div>
    );
  }
}

class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}

class RouterPage extends Component {
  render() {
    console.log("知识点：");
    console.log("1.<Switch>重命名为<Routes>");
    console.log("2.component/render被element替代");

    return (
      <div>
        {/* <h3>RouterPage</h3> */}

        <Router>
          <Link to="/">首页</Link>
          <span> | </span>
          <Link to="/user">用户中心</Link>

          {/* //!  <Switch>重命名为<Routes> */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            {/*//! component/render 被 element 替代 */}
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default RouterPage;
