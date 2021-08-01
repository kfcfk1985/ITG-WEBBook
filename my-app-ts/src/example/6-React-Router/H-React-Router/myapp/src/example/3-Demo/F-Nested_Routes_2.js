import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="invoices">Invoices</Link> |{" "}
        <Link to="dashboard">Dashboard</Link>
      </nav>
      <div className="content">
        {/* //! 嵌套路由的使用 ：匹配的子路由会在 <Outlet />的位置 替换*/}

        <Outlet />
      </div>
    </div>
  );
}

function Invoices() {
  return <h1>Invoices</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function App() {
  console.log(
    "https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md"
  );
  console.log("例子： Nested Routes(嵌套路由)");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* //! 嵌套路由的使用:子路由都包裹在这里。 */}

          <Route path="invoices" element={<Invoices />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
