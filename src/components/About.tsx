import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../motion";

const ServiceCard = ({}:any) => {
  return (
    <>
    {/* <Tilt className="xs:w-[250px] w-full">
      <motion.div>

      </motion.div>
    </Tilt> */}
    </>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, natus
        commodi architecto modi veritatis pariatur consequatur saepe, dolorem
        explicabo cum tempore ut at porro id excepturi debitis, nesciunt quidem.
        Libero.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))
        }
      </div>
    </>
  );
};

export default About;
