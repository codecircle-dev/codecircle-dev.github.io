import React from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import classes from "../../index.module.css";
const Challenges = () => {
  return (
    <div>
      <Header />
      <section>
        <div className={classes.container}>
          <h2>Coding Challenges</h2>
          <p>Put your coding skills to the test with these challenges:</p>
          <ul>
            <li>
              <a href="#">Fibonacci Sequence</a> - Write a function to generate
              the Fibonacci sequence.
            </li>
            <li>
              <a href="#">Palindrome Checker</a> - Check if a given string is a
              palindrome.
            </li>
            <li>
              <a href="#">Binary Search Algorithm</a> - Implement the binary
              search algorithm.
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Challenges;
