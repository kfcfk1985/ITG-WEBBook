import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
function App() {
  console.log(
    "https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md"
  );
  console.log("例子：Introduction");
  return (
    <div>
      {/* //! 路由的基本使用 */}
      <Router>
        <nav>
          <Link to="/">Index</Link>
          <span> | </span>
          <Link to="/about">about</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
