import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends Component {
  render() {
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
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <p></p>
          <Link to="/user">用户中心</Link>

          {/* // ! children：不管是否匹配，都显示一些内容 */}
          <Route exact path="/" children={() => <h3>HomePage</h3>} />
          <Route path="/user" component={UserPage} />
        </Router>
      </div>
    );
  }
}

export default RouterPage;
