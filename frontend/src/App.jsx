import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Jobs from "./components/pages/Jobs";
import Events from "./components/pages/Events";
import Challenges from "./components/pages/Challenges";
import Tutorials from "./components/pages/Tutorials";
import "@fortawesome/fontawesome-free/css/all.css";
import Login from "./components/pages/Login";
import ResetPassword from "./components/pages/ResetPassword";
import ForgotPassword from "./components/pages/ForgotPassword";
import Register from "./components/pages/Register";
import PrivateRoute from "./components/routing/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/tutorials" element={<Tutorials />} />
        </Route>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordreset/:resetToken" element={<ResetPassword />} />

      </Routes>
    </Router>
  );
};

export default App;
