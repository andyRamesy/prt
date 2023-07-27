import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import { user,mail,contact,about } from "../assets/index";
import "./styles/WelcomeStyle.css"
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <section className="flex relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} mt-[120px] inset-0 top-[120px] max-w-7xl mx-auto flex flex-col  items-center gap-5`}
      >
        {/* <div className="h-[200px]"> */}
          <h1 className={`${styles.heroHeadText} text-white h-[200px]`}>
            <Typewriter
              options={{
                strings:
                  "Hello world, my name is <em class='text-red-500'><strong> Andy Ramesy</strong></em>",
                autoStart: true,
                skipAddStyles: true,
              }}
            />
          </h1>
        {/* </div> */}
        <Link to="/about" className="flex gap-[5px] my-[10px] btn">
          <img src={about} alt="" className="max-w-[75px]"/>
          Want to know about me
          {/* <Link  >Contact me</Link> */}
        </Link>
        {/* <div className="absolute bottom-[10px]">
          <img
            src={user}
            alt="Me"
            className="max-w-[400px] h-max-[300px] object-contain"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Welcome;
