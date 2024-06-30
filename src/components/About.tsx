import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { techs } from "../constants";
import { fadeIn, textVariant } from "../motion";
import { SectionWrapper } from "../hoc";
import Skills from "./Skills";
import { contact } from "../assets/index";
import { AnimatedLayout, Button } from "./index";

const ServiceCard = ({ index, title, icon, level, name }: any) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full red-pink-gradient  rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col text-center">
          <img src={icon} alt={name} />
          <h3 className="text-white text-[20px] font-bold text-center">
            {name}
          </h3>
          <Skills level={level} />
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="text-center mt-[50px]">
      <AnimatedLayout>
        <motion.div variants={textVariant(1)}>
          <h2 className={styles.sectionHeadText}>About me.</h2>
        </motion.div>
        <motion.p
          className="mt-4 text-secondary leading-[1.5rem] md:leading-[2rem] lg:leading-[3rem]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          <span
            className={`${styles.sectionSubText} text-white-100 tracking-normal`}
          >
            &emsp;Welcome to my portfolio. I'm thrilled to have you here , I'm a
            <span className="text-[#915eff]"> Mobile & Web </span>developer
            specializing in Flutter and JavaScript. I have a strong passion for
            crafting captivating digital experiences that engage users on multiple
            platforms.
          </span>
        </motion.p>
        <div className="mt-[50px]">
          <Button text="Contact me" direction="/contact" imageLink={contact} />
        </div>
      </AnimatedLayout>
    </div>
  );
};

export default About;
