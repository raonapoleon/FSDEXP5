import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Route-Based Lazy Loading
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <Router>
      <div>
        <h1>Route-Based Lazy Loading</h1>

        <nav>
          <Link to="/">Dashboard</Link> |{" "}
          <Link to="/profile">Profile</Link> |{" "}
          <Link to="/settings">Settings</Link>
        </nav>
<Suspense
  fallback={
    <div className="loading-container">
      <h1>Loading Route...</h1>
    </div>
  }
>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>

      </div>
    </Router>
  );
}

export default App;
