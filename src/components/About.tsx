import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { techs } from "../constants";
import { fadeIn, textVariant } from "../motion";
import { SectionWrapper } from "../hoc";
import Skills from "./Skills";

const ServiceCard = ({ index, title, icon, level, name }: any) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full red-pink-gradient  rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
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
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px]  leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        <span className={`${styles.heroSubText} mt-2 text-white-100`}>
          &emsp;Welcome to my portfolio. I'm thrilled to have you here , I'm a
          <span className="text-[#915eff]"> Mobile & Web </span>developer
          specializing in Flutter and JavaScript. I have a strong passion for
          crafting captivating digital experiences that engage users on multiple
          platforms.
        </span>
      </motion.p>
      {/* <div className="mt-20 flex flex-wrap flex-col gap-10 xs:justify-center">
        {techs.map((tech, index) => (
          <>
            <h1 className={`${styles.heroSubText} text-secondary`}>{tech.title}</h1>
            <div className="flex flex-wrap gap-4">
              {tech.data.map((techStack) => (
                <ServiceCard
                  key={techStack.name}
                  index={index}
                  {...techStack}
                />
              ))}
            </div>
          </>
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
