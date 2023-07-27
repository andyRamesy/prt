import {
  About,
  Contact,
  Experience,
  Welcome,
  Navbar,
  StarsCanvas,
} from "./components";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import Router from "./routes/routes";
import { useState } from "react";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <StarsCanvas />
    </>
  );
};

export default App;
