import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const Header = () => {
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
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
