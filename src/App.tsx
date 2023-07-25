import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Welcome,
  Navbar,
  // Tech,
  // Works,
  StarsCanvas,
  NextPrev,
} from "./components";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Router from "./routes/routes";
import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
  const nextPage = () => {
    setStep(1 + step);
    console.log(step);
  };

  return (
    <BrowserRouter>
      <Navbar />
      {step === 1 && <Welcome />}
      {step === 2 && <About />}
      <NextPrev nextPage={nextPage} />
      {}
      {/* <Router /> */}
      <StarsCanvas />
    </BrowserRouter>
  );
};

export default App;
