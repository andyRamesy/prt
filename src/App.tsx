import {
  About,
  Contact,
  Experience,
  Welcome,
  Navbar,
  StarsCanvas,
  NextPrev,
} from "./components";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import Router from "./routes/routes";
import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const nextPage = () => {
    switch (step) {
      case 0:
        setStep(step + 1);
        navigate("/about");
        console.log("step after clic:", step);
      case 1:
        // navigate("/experience");
        setStep(step + 1);
        break;
      case 2:
        // navigate("/experience");
        setStep(step + 1);
        break;
      case 3:
        // navigate("/experience");
        setStep(step + 1);
        break;
      default:
        break;
    }
    // console.log(step);
  };

  const previousPage = () => {
    navigate(-1);
    setStep(step - 1);
  };

  console.log("step", step);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <NextPrev previousPage={previousPage} nextPage={nextPage} />
      <StarsCanvas />
    </>
  );
};

export default App;
