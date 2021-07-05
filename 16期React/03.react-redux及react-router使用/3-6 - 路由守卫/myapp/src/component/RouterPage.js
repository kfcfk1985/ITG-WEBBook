import React, { useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import "./RouterPage.css";

function HomePage() {
  return (
    <div>
      <h3>HomaPage</h3>
    </div>
  );
}
function UserPage() {
  return (
    <div>
      <h3>UserPage</h3>
    </div>
  );
}

function LoginPage(props) {
  console.log("LoginPage:props", props);

  const { location, isLogin } = props;
  const { redirect = "/" } = location.state || {};

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

function PrivateRoute(props) {
  const { path, component, isLogin } = props;

  if (isLogin) {
    console.log("已经登录，直接显示组件");

    return <Route path={path} component={component} />;
  } else {
    console.log("未登录，重定向");

    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { redirect: path },
        }}
      />
    );
  }
}

function RouterPage() {
  const [isLogin, setIsLogin] = useState(false);

  const toggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <p>
        {" "}
        <button onClick={toggle}>{isLogin ? "登出" : "登陆"}</button>
      </p>

      {/* <h3>RouterPage</h3> */}

      <Router>
        <Link to="/">首页</Link>

        {!isLogin && (
          <Fragment>
            <span className="split"></span>
            <Link to="/login">登陆中心</Link>
          </Fragment>
        )}

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
            <PrivateRoute path="/user" component={UserPage} isLogin={isLogin} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default RouterPage;
