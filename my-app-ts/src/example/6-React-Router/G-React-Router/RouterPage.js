import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import "./index.css";

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

class LoginPage extends Component {
  render() {
    console.log("LoginPage:props", this.props);

    const { isLogin, location } = this.props;

    // const isLogin = false;

    const { redirect = "/" } = location.state || {}; //!props.location.state： 存放路由跳转时传递的额外信息

    if (isLogin) {
      console.log("//登陆后，返回到之前登陆的页面");
      return <Redirect to={redirect} />;
    } else {
      console.log("//未登陆，显示登陆界面");
      return (
        <div>
          <h3>LoginPage</h3>
        </div>
      );
    }
  }
}

class PrivateRoute extends Component {
  render() {
    console.log("PrivateRoute:props", this.props);
    const { isLogin, path, component } = this.props;
    if (isLogin) {
      console.log("//已经登陆，直接去到登陆的页面");
      return <Route path={path} component={component} />;
    } else {
      console.log("//未登陆，重定向到登陆页面");
      return (
        // ! 把从哪里来的数据放到state中的redirect（名字自定义）
        <Redirect to={{ pathname: "/login", state: { redirect: path } }} />
      );
    }
  }
}
class RouterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  toggle = () => {
    this.setState(
      (state) => {
        return {
          isLogin: !state.isLogin,
        };
      },
      () => {
        console.log("是否已经登陆：", this.state.isLogin);
      }
    );
  };

  render() {
    let { isLogin } = this.state;
    return (
      <div className="container">
        <button onClick={this.toggle}>{isLogin ? "登出" : "登陆"}</button>
        <h3>RouterPage</h3>

        <Router>
          <Link to="/">首页</Link>
          <span className="split"></span>
          <Link to="/login">登陆中心</Link>
          <span className="split"></span>
          <Link to="/user">用户中心</Link>

          <div className="content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                path="/login"
                render={(routeProps) => (
                  <LoginPage {...routeProps} isLogin={isLogin} />
                )}
              />
              <PrivateRoute
                path="/user"
                component={UserPage}
                isLogin={isLogin}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default RouterPage;
