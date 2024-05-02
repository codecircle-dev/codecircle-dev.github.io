import React from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import "../../index.css";
import { Helmet } from "react-helmet";

const Challenges = () => {
  return (
    <div>
      <Helmet>
        <title>Challenges - CodeCircle</title>
      </Helmet>
      <Header />
      <section className="page-content">
        <div className="container">
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
