import React from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import "../../index.css";
import { Helmet } from "react-helmet";

const Tutorials = () => {
  return (
    <div>
      <Helmet>
        <title>Tutorials - CodeCircle</title>
      </Helmet>
      <Header />
      <section className="page-content">
        <div className="container">
          <h2>Tutorials</h2>
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
