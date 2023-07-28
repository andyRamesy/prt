import {
  About,
  Contact,
  Experience,
  Welcome,
  Navbar,
  StarsCanvas,
} from "./components";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import Router from "./routes/routes";
import { useState } from "react";
import AnimatedLayout from "./components/AnimatedLayout";

const App = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        {/*<AnimatedLayout> */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </AnimatedLayout>*/}
        //{" "}
      </AnimatePresence>
      <StarsCanvas />
    </>
  );
};

export default App;
