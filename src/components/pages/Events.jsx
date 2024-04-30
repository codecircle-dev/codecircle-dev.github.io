import React from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import classes from "../../index.module.css";

const Events = () => {
  return (
    <div>
      <Header />
      <section className={classes.pageContent}>
        <div className={classes.container}>
          <h2>Events Calendar</h2>
          <p>Check out our upcoming events:</p>
          <ul>
            <li>
              <a href="#">Web Development Workshop</a> - Date: January 15, 2025
              | Location: Online
            </li>
            <li>
              <a href="#">JavaScript Meetup</a> - Date: February 5, 2025 |
              Location: City Center
            </li>
            <li>
              <a href="#">Tech Conference</a> - Date: March 20-22, 2025 |
              Location: Convention Center
            </li>
          </ul>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Events;
