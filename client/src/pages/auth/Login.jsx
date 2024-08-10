import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await api.get("/sanctum/csrf-cookie"); //set csrf cookie
      await api.post("/login", { email, password });
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="col-md-8 offset-md-2">
      <div className="card">
        <div className="card-header">
          <h4>Login</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="row mb-3">
              <label
                htmlFor="email"
                className="col-md-4 col-form-label text-md-end"
              >
                Email Address'
              </label>

              <div className="col-md-6">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  autoFocus
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
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  name="password"
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6 offset-md-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />

                  <label className="form-check-label" htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>
            </div>

            <div className="row mb-0">
              <div className="col-md-8 offset-md-4">
                <button type="submit" className="btn btn-primary white">
                  Login
                </button>
                <Link className="btn btn-link" to="#">
                  Forgot Your Password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
