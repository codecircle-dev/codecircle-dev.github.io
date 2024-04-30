import React from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import classes from "../../index.module.css";
const Tutorials = () => {
  return (
    <div>
      <Header />
      <section className={classes.pageContent}>
        <div className={classes.container}>
          ˝<h2>Tutorials</h2>
          <ul>
            <li>
              <a href="#">Introduction to HTML</a> - Learn the basics of HTML
              markup.
            </li>
            <li>
              <a href="#">CSS Styling Techniques</a> - Explore advanced CSS
              styling concepts.
            </li>
            <li>
              <a href="#">JavaScript Fundamentals</a> - Master the fundamentals
              of JavaScript programming.
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tutorials;
