import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function DashboardGraphs() {
  return (
    <div>
      <h1>DashboardGraphs</h1>
    </div>
  );
}
function InvoiceList() {
  return (
    <div>
      <h1>InvoiceList</h1>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <p>Look, more routes!</p>

      {/* //! 非Outlet形式的嵌套，需要加上 Routes 包裹*/}
      <Routes>
        <Route path="/" element={<DashboardGraphs />} />
        <Route path="invoices" element={<InvoiceList />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function App() {
  console.log(
    "https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md"
  );
  console.log("例子：Descendant Routes(多个<Routes />)");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* //! 非Outlet形式的路由嵌套时，父路由要带上*(表示适配后面任何的字符串) */}
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
