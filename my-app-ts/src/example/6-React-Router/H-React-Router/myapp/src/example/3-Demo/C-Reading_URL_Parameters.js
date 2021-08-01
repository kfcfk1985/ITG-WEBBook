import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";

function Invoice() {
  let { invoiceId } = useParams(); //! 获取动态路由的参数
  return <h1>Invoice {invoiceId}</h1>;
}

function App() {
  console.log(
    "https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md"
  );
  console.log("例子： Reading URL Parameters");

  return (
    <Router>
      <Link to="invoices/123">123</Link>
      <Routes>
        <Route path="invoices/:invoiceId" element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default App;
