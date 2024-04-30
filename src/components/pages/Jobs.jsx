import React from "react";
import classes from "../../index.module.css";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
const Jobs = () => {
  return (
    <div>
      <Header />
      <section className={classes.pageContent}>
        <div className={classes.container}>
          <h2>Job Board</h2>
          <p>Explore job opportunities in the coding and technology fields:</p>
          <ul>
            <li>
              <a href="#">Frontend Developer</a> - Company: ABC Tech | Location:
              Remote
            </li>
            <li>
              <a href="#">Software Engineer</a> - Company: XYZ Inc. | Location:
              San Francisco, CA
            </li>
            <li>
              <a href="#">Data Scientist</a> - Company: DataWorks | Location:
              New York, NY
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Jobs;
