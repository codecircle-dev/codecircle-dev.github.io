import React from "react";
import { Link } from "react-router-dom";
import classes from "../../index.module.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div className={classes.container}>
          <h1>CodeCircle</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/tutorials">Tutorials</Link>
            </li>
            <li>
              <Link to="/challenges">Challenges</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
