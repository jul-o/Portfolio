import About from "components/sections/About";
import Contact from "components/sections/Contact";
import DarkModeButton from "components/reusable/DarkModeButton";
import Experiences from "components/sections/Experiences";
import Home from "components/sections/Home";
import Navbar from "components/reusable/Navbar";
import UpButton from "components/reusable/UpButton";
import { motion, TargetAndTransition } from "framer-motion";
import styles from "styles/index.module.scss";
import classNames from "utils/classNames";

const Page = () => {
  const backgroundAnimation: TargetAndTransition = {
    scale: ["0%, 0%", "80%, 80%", "100%, 100%"],
    opacity: ["0", "1", "0.8"],
    transition: {
      ease: "easeInOut",
      duration: 2,
      delay: 2,
      times: [0, 0.8, 1],
    },
  };
  return (
    <>
      <div id="root">
        {/* div that takes the whole content height. Useful for drag boundaries */}
        <div id="content">
          <motion.div
            animate={backgroundAnimation}
            initial={{ opacity: 0 }}
            id="background"
          />

          <Navbar className={styles.navbar} />
          <Home className="section" />
          <About className={classNames("section", styles.about)} />
          <Experiences className={classNames("section", styles.experiences)} />
          <Contact className="section" />
        </div>
      </div>

      <DarkModeButton className={styles.darkModeButton} />
      <UpButton className={styles.upButton} />
    </>
  );
};

export default Page;
