import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import {user} from "../assets/index"
const Welcome = () => {
  return (
    <section className="flex relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} mt-[120px]  inset-0 top-[120px] max-w-7xl mx-auto flex flex-col  items-center gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
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
      <div className="absolute bottom-[10px]">
        <img src={user} alt="Me" className="max-w-[400px] h-max-[300px] object-contain"/>
      </div>
      </div>
      {/* <ComputersCanvas /> */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Welcome;
