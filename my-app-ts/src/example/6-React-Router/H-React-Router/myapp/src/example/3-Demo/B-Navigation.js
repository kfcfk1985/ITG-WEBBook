import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        {/* //!导航的使用 */}
        <Link to="/">Home</Link> | <Link to="about">About</Link>
      </nav>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

function App() {
  console.log(
    "https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md"
  );
  console.log("例子：Navigation");

  return (
    <div>
      <Router>
        <h1>Welcome</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
