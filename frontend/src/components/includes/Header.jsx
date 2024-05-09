import React from "react";
import { Link, Navigate,useNavigate } from "react-router-dom";
import "../../index.css";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <header>
      <div className="navbar-container" id="navbar-container">
        <nav>
          <div className="container">
            <h1>CodeCircle</h1>
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  About us
                </Link>
              </li>
              <li>
                <Link className="link" to="/tutorials">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link className="link" to="/challenges">
                  Challenges
                </Link>
              </li>
              <li>
                <Link className="link" to="/events">
                  Events
                </Link>
              </li>
              <li>
                <Link className="link" to="/jobs">
                  Jobs
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li>
                  <button className="link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link className="link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/register">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
