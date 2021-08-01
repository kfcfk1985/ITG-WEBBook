import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
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
  let navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard/invoices"); //! 编程方式导航
  }

  return (
    <div>
      <p>Look, more routes!</p>
      <button onClick={handleClick}>点解跳转</button>
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
  console.log("例子：Navigating Programmatically(编程方式导航)");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
