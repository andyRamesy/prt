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
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
      <StarsCanvas />
    </>
  );
};

export default App;
