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

function SearchComponent(props) {
  console.log("SearchComponent:props", props);
  let { id } = props.match.params;
  return (
    <div>
      <p>SearchComponent</p>
      <p>id:{id}</p>
    </div>
  );
}

class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <p></p>
          <Link to="/search/123">用户中心</Link>

          <Route exact path="/" component={HomePage} />
          <Route path="/search/:id" component={SearchComponent} />
        </Router>
      </div>
    );
  }
}

export default RouterPage;
