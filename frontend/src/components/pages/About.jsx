import React from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import "../../index.css";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - CodeCircle</title>
        </Helmet>
      <Header />
      <section className="page-content">
        <div className="container">
          <h2>About Us</h2>
          <p>Welcome to CodeCircle!</p>
          <p>
            We are a vibrant community of coding enthusiasts, learners, and
            professionals who come together to share knowledge, collaborate on
            projects, and support each other's growth in the field of
            technology.
          </p>
          <p>
            Our mission is to foster a supportive and inclusive environment
            where individuals of all skill levels can thrive and advance their
            coding skills. Whether you're a beginner looking to learn the basics
            or an experienced developer seeking new challenges, you'll find a
            place here at CodeCircle.
          </p>
          <p>
            Join us in our journey to explore the exciting world of coding and
            technology!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
