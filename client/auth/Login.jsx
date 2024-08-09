import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "/src/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/login",
        { email, password },
        { withCredentials: true }
      );
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="row align-items-center">
      <div className="col-md-8 offset-md-2 pt-3">
        <div className="card">
          <div className="card-header">
            <h2>Login</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="row mb-3">
                <label
                  htmlFor="email"
                  className="col-md-4 col-form-label text-md-end"
                >
                  Email
                </label>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="password"
                  className="col-md-4 col-form-label text-md-end"
                >
                  Password
                </label>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="row mb-0">
                <div className="col-md-8 offset-md-4">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
