import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useParams,
  Link,
} from "react-router-dom";

function Invoices() {
  return (
    <div>
      <h1>Invoices</h1>

      {/*
        This element renders the element for the child route, which in
        this case will be either <SentInvoices> or <IndividualInvoice>
      */}
      {/* //! 嵌套路由的使用 ：匹配的子路由会在 <Outlet />的位置 替换*/}
      <Outlet />
    </div>
  );
}

function IndividualInvoice() {
  let { invoiceId } = useParams();
  return <h1>Invoice {invoiceId}</h1>;
}

function SentInvoices() {
  return <h1>Sent Invoices</h1>;
}

function App() {
  console.log(
    "https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md"
  );
  console.log("例子： Nested Routes(嵌套路由)");

  return (
    <Router>
      <nav>
        <Link to="invoices/123">123</Link>
        <span> | </span>
        <Link to="invoices/sent">sent</Link>
      </nav>

      <Routes>
        <Route path="invoices" element={<Invoices />}>
          {/* //! 嵌套路由的使用:子路由都包裹在这里。 */}
          {/* //! Outlet形式的路由嵌套时，父路由要不需要带上*,子路由中也不需要加上 Routes 包裹 */}
          <Route path=":invoiceId" element={<IndividualInvoice />} />
          <Route path="sent" element={<SentInvoices />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
