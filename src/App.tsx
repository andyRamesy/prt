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
  NextPrev
} from "./components";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Router from "./routes/routes";

const App = () => {
  return (
    // <BrowserRouter>
    //   <div className="relative z-0 bg-primary">
    //     <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    //       <Navbar />
    //       {/* <Router /> */}
    //       <Welcome />
    //     </div>  
    //     <About />
    //     <Experience />
    //     {/* <Tech /> */}
    //     {/* <Works /> */}
    //     {/* <Feedbacks /> */}
    //     <div className="realative z-0">
    //       <Contact />
    //       <StarsCanvas />
    //     </div>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
        <Navbar />
        <Router />
        <NextPrev />
        <StarsCanvas />
  </BrowserRouter>
  );
};

export default App;
