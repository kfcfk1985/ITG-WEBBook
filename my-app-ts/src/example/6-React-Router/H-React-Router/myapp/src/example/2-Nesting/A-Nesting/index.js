import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Me() {
  return <div>Me</div>;
}
function Id() {
  const { id } = useParams(); //!调用该Hook会返回match对象中的params(动态路由传递过来的参数)
  return <div>Id:{id}</div>;
}
function Profile() {
  return (
    <div>
      <nav>
        <Link to="me">me</Link>
        <span> | </span>
        <Link to="123">Id</Link>
      </nav>

      {/* //! 非Outlet形式的嵌套，需要加上 Routes 包裹*/}
      <Routes>
        {/*//!  /me 和 me 都行，因此建议都不加/  */}
        <Route path="me" element={<Me />} />
        <Route path=":id" element={<Id />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}

export default function Index() {
  console.log("知识点：");
  console.log("1.嵌套的基本使用");
  console.log("2.useParams的使用");
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <span> | </span>

          {/*//!  /profile 和 profile 都行，因此建议都不加。一旦点击会再url上加上这里的to(会智能加上/)  */}
          <Link to="profile">profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* //! 非Outlet形式的路由嵌套时，父路由要带上*(表示适配后面任何的字符串) */}
          <Route path="profile/*" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
