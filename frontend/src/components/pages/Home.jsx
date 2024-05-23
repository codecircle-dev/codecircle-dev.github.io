import React from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";
import "../../index.css";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CodeCircle</title>
      </Helmet>
      <Header />
      <section className="hero-section">
        <div className="container">
          <h1>Welcome to CodeCircle</h1>
          <p>Join our community to learn, collaborate, and grow together!</p>
          <a href="https://t.me/+teNW2KeJljoxZGNh" className="telegram-link">
            Join our Telegram Group
          </a>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="feature">
            <i className="fas fa-laptop-code"></i>
            <h3>Learn Coding</h3>
            <p>
              Access tutorials, code snippets, and coding challenges to enhance
              your skills.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <h3>Community Support</h3>
            <p>
              Connect with like-minded individuals, share knowledge, and seek
              help from the community.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-calendar-alt"></i>
            <h3>Upcoming Events</h3>
            <p>
              Stay updated on workshops, meetups, and other events happening in
              the coding world.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
