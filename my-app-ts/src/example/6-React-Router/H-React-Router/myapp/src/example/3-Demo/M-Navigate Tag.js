import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

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
  const [isShow, setIsShow] = useState(false);

  function handleClick() {
    setIsShow((prevState) => !prevState);
  }

  useEffect(() => {
    console.log("useEffect", isShow);
    //! 跳转后，把这个移除掉：isShow设为false
    if (isShow === true) {
      setIsShow(false);
    }
    return () => {};
  }, [isShow]);

  return (
    <div>
      <p>Look, more routes!</p>
      <button onClick={handleClick}>{isShow ? "已经跳转" : "点击跳转"}</button>

      {/* //! A <Navigate> element changes the current location when it is rendered. It's a component wrapper around useNavigate, and accepts all the same arguments as props. */}
      {/* //!注意：这个  <Navigate/> 只要存在界面上，就会一直跳转，所以跳转后，需要把这个移除掉 */}
      {isShow && <Navigate to="/dashboard/invoices" />}
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
      <nav>
        <Link to="/">Index</Link>
        <span> | </span>
        <Link to="/dashboard">dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
