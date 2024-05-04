import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Routes>
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/auth" element={<h1>Sign In</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;