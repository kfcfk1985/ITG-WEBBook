import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>NotFound</h1>
    </div>
  );
}
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
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
  console.log("例子： 'Not Found' Routes(“未找到”路由)");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* //! 这里为 dashboard 或 /dashboard 都行  */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* //! * 表示适配后面任何的字符串 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
