import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}
function DetailMain() {
  return <div>DetailMain</div>;
}
function DetailFoot() {
  return <div>DetailFoot</div>;
}

function Detail() {
  return (
    <div>
      {/* //! 注意：这里不要用 "/foot" ,因为这样用的话，是整个url的地址变为"/foot",而不是 "/detail/foot"  */}
      <Link to="foot">foot</Link>

      {/* //! 非Outlet形式的嵌套，需要加上 Routes 包裹*/}
      <Routes>
        <Route path="/" element={<DetailMain />} />
        {/*//!  /foot 和 foot 都行，因此建议都不加/  */}
        <Route path="foot" element={<DetailFoot />} />
      </Routes>
    </div>
  );
}

export default function Index() {
  console.log("知识点：");
  console.log("1.多个<Routes />的使用");
  console.log("2.路由嵌套时，父路由要带上*(表示适配后面任何的字符串)");
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <span> | </span>
        {/*//!  /detail 和 detail 都行，因此建议都不加。一旦点击会再url上加上这里的to(会智能加上/)  */}
        <Link to="detail">detail</Link>

        <Routes>
          <Route path="/" element={<Home />} />

          {/*//!  /detail 和 detail 都行，因此建议都不加 / */}
          {/* //! 非Outlet形式的路由嵌套时，父路由要带上*(表示适配后面任何的字符串) */}
          <Route path="detail/*" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}
