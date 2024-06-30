import {
  About,
  Contact,
  Experience,
  Welcome,
  Navbar,
  StarsCanvas,
} from "./components";
import {Route, Routes } from "react-router-dom";
import "./index.css";
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
