import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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

class EmptyPage extends Component {
  render() {
    return (
      <div>
        <h3>404</h3>
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
          <p></p>
          <Link to="/login">登陆</Link>

          {/* //! 独占路由：表示仅匹配显示一个,类似 switch 语句 */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user" component={UserPage} />
            <Route component={EmptyPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default RouterPage;
