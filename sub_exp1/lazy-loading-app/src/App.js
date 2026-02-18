import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Lazy Loading Components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <div>
        <h1>Lazy Loading Example</h1>

        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about"> About</Link> | 
          <Link to="/contact"> Contact</Link>
        </nav>

        {/* Suspense Fallback */}
        <Suspense fallback={<h3>Loading...</h3>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

      </div>
    </Router>
  );
}

export default App;
