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
      <section className="flex w-full mx-auto">
        <div
          className={` inset-0 w-full  max-w-7xl  flex flex-col  items-center gap-5`}
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

        </div>
      </section>
      <div className="mt-[4rem ]">
        <Button
          text="Want to know about me"
          direction="/about"
          imageLink={about}
        />
      </div>
    </AnimatedLayout>
  );
};

export default Welcome;
