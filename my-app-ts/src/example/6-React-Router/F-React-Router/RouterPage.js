import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function DetaiName(props) {
  const { id } = props.match.params;
  console.log("DetaiName", id); //!注意：这里也能接收到id的值
  return <div>DetaiName</div>;
}
function DetailAge(props) {
  const { id } = props.match.params;
  console.log("DetaiName", id); //!注意：这里也能接收到id的值
  return <div>DetailAge</div>;
}
function Detail(props) {
  const { id } = props.match.params;
  console.log("Detail", id); //!注意：这里也能接收到id的值
  return (
    <div>
      <p>Detail</p>
      <Link to={`/detail/${id}/name`}>Name</Link>
      <span> | </span>
      <Link to={`/detail/${id}/age`}>Age</Link>

      <Route path={`/detail/:id/name`} component={DetaiName} />
      <Route path={`/detail/:id/age`} component={DetailAge} />
    </div>
  );
}
function Home() {
  return <div>Home</div>;
}
function Index() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/detail/123">Detail</Link>

        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </Router>
    </div>
  );
}

export default Index;
