import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  Outlet,
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
        {/* //! me 在path为"me"或 ":id" 中都可以适配，但由于 "me" 适配度更高，所以会用"me" */}
        <Link to="me">me</Link>
        <span> | </span>
        <Link to="123">Id</Link>
      </nav>
      {/*
            //! 将直接根据上面定义的不同路由参数，渲染<Me />或<Id />
        */}

      <Outlet />
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}

export default function Index() {
  console.log("知识点：");
  console.log("1.嵌套方式：使用 Outlet");
  console.log("2.useParams的使用");
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="profile">profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* //! Outlet形式的路由嵌套时，父路由要不需要带上*,子路由中也不需要加上 Routes 包裹 */}
          <Route path="profile" element={<Profile />}>
            {/*//!  /me 和 me 都行，因此建议都不加/  */}
            <Route path="me" element={<Me />} />
            <Route path=":id" element={<Id />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
