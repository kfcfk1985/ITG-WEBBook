import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function DashboardHome() {
  return <h1>DashboardHome</h1>;
}
function DashboardInvoices() {
  return <h1>DashboardInvoices</h1>;
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Outlet />
    </div>
  );
}
function Home() {
  return <h1>Home</h1>;
}

function App() {
  console.log(
    "https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md"
  );
  console.log("例子： Index Routes(索引路由)");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />}>
          {/* //! 路径为 /dashboard 或 /dashboard/ 将渲染  DashboardHome  */}
          <Route path="/" element={<DashboardHome />} />

          {/* //! 路径为 /dashboard/invoices 将渲染  DashboardInvoices  */}
          <Route path="invoices" element={<DashboardInvoices />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
