import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";

function Invoice() {
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
  console.log("例子： Ambiguous Paths and Ranking(模糊的路径和排名)");

  return (
    <Router>
      <Link to="invoices/123">123</Link>
      <Link to="invoices/sent">sent</Link>
      {/* //! 由于 invoices/sent 和下面的 invoices/sent匹配度更高，所以用了invoices/sent的路由，而不是 invoices/:invoiceId那个 */}

      <Routes>
        <Route path="invoices/sent" element={<SentInvoices />} />
        <Route path="invoices/:invoiceId" element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default App;
