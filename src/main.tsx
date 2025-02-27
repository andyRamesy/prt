import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedLayout from "./components/AnimatedLayout";
import { AnimatePresence } from "framer-motion";
import "./i18n/index.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    {/* <AnimatePresence>
        <AnimatedLayout> */}
    <App />
      {/* </AnimatedLayout>
      </AnimatePresence> */}
  </BrowserRouter>
);
