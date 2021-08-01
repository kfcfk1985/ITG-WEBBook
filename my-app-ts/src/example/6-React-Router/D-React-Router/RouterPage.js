import React, { Component } from "react";
import ReactDom from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ListItemLink(props) {
  const { to, name, ...rest } = props;
  return (
    <Route
      path={to}
      children={(routeProps) => {
        const { match } = routeProps; //!不匹配的时候，match为null；
        return (
          <li className={match ? "active" : ""}>
            <Link to={to} {...rest}>
              {name}
            </Link>
          </li>
        );
      }}
    />
  );
}

class RouteChildren extends Component {
  render() {
    return (
      <div>
        <h3>RouteChildren</h3>
        <Router>
          <ul>
            <ListItemLink to="/somewhere" name="链接1" />
            <ListItemLink to="/somewhere-else" name="链接2" />
          </ul>
        </Router>
      </div>
    );
  }
}

export default RouteChildren;
