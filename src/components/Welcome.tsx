import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import { user, mail, contact, about } from "../assets/index";
import "./styles/WelcomeStyle.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { AnimatedLayout } from "./index";

const Welcome = () => {
  return (
    <AnimatedLayout>
      <section className="flex relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX}  inset-0 top-[120px] max-w-7xl mx-auto flex flex-col  items-center gap-5`}
        >
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
          <Button
            text="Want to know about me"
            direction="/about"
            imageLink={about}
          />
        </div>
      </section>
    </AnimatedLayout>
  );
};

export default Welcome;
