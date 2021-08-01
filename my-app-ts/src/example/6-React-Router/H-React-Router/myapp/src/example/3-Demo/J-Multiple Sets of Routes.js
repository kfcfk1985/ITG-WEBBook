import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function MainNav() {
  return <h1>MainNav</h1>;
}
function DashboardNav() {
  return <h1>DashboardNav</h1>;
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
}
function About() {
  return <h1>About</h1>;
}
function Support() {
  return <h1>Support</h1>;
}
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
function Invoices() {
  return <h1>Invoices</h1>;
}
function Team() {
  return <h1>Team</h1>;
}
function NotFound() {
  return <h1>NotFound</h1>;
}

function App() {
  console.log(
    "https://github.com/ReactTraining/react-router/blob/dev/docs/installation/getting-started.md"
  );
  console.log("例子： Multiple Sets of Routes(多个<Routes />)");

  return (
    <Router>
      <div>
        <Routes>
          {/* //!不同Routes下存在多个同名路由，都会渲染 */}
          <Route path="/" element={<MainNav />} />
          <Route path="dashboard" element={<DashboardNav />} />
        </Routes>
      </div>

      <div>
        <Routes>
          {/* //!不同Routes下存在多个同名路由，都会渲染 */}
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="invoices" element={<Invoices />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
