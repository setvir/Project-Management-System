import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="navbar-brand">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="navbar-brand">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5 mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
