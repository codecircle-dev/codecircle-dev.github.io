import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Jobs from "./components/pages/Jobs";
import Events from "./components/pages/Events";
import Challenges from "./components/pages/Challenges";
import Tutorials from "./components/pages/Tutorials";
import "@fortawesome/fontawesome-free/css/all.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
