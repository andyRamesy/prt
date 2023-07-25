import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { techs } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../motion";
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

const Techno = () => {
  return (
    <div className="mt-20 flex flex-wrap flex-col gap-10 xs:justify-center">
      {techs.map((tech, index) => (
        <>
          <h1 className={`${styles.heroSubText} text-secondary`}>
            {tech.title}
          </h1>
          <div className="flex flex-wrap gap-4">
            {tech.data.map((techStack) => (
              <ServiceCard key={techStack.name} index={index} {...techStack} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default SectionWrapper(Techno, "");
