import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "/pages/Home";
import Login from "/auth/Login"; // Example auth page
import ProtectedRoute from "/src/ProtectedRoute";
import { AuthProvider } from "/src/AuthContext"; // Import AuthProvider
import axios from "axios";
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  withCredentials: true, // If you're working with session-based authentication
});

function App() {
  return (
    <AuthProvider>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid" style={{ margin: "20px 70px" }}>
            <span className="navbar-brand">Project Management</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="navbar-brand">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="navbar-brand">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="/login" element={<Login />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
