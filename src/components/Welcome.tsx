import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import { user, mail, contact, about } from "../assets/index";
import "./styles/WelcomeStyle.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import { AnimatedLayout } from "./index";
import { Trans, useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <AnimatedLayout>
      <section className="flex w-full mx-auto my-[5rem]">
        <div
          className={` inset-0 w-full max-w-7xl flex flex-col items-center gap-5`}
        >
          <Trans>
            <h1 className={`${styles.heroHeadText} text-white h-[200px]`} >
              <Typewriter
                options={{
                  strings: [t("welcome")],
                  autoStart: true,
                  skipAddStyles: true,
                }}
              />
            </h1>
          </Trans>
        </div>
      </section>
      <div className="mt-[4rem ]">
        <Button text={t("knowMe")} direction="/about" imageLink={about} />
      </div>
    </AnimatedLayout>
  );
};

export default Welcome;
