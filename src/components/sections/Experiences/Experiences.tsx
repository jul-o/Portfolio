import Experience from "components/sections/Experiences/Experience";
import experiences from "data_frontend/experiences.json";
import React, { useEffect, useState } from "react";
import classNames from "utils/classNames";
import useViewportObserver from "utils/hooks/useViewportObserver";
import styles from "./Experiences.module.scss";
import { useLocalStorage } from "react-use";
import { rootVariants, childrenVariants } from "utils/slideInVariants";
import { motion, Variants } from "framer-motion";

const Experiences = ({ className }) => {
  const [storageIndex, updateStorageIndex] = useLocalStorage(
    "selected-index",
    "0"
  );
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedIndex(parseInt(storageIndex));
  }, []);

  useEffect(() => {
    updateStorageIndex(selectedIndex.toString());
  }, [selectedIndex]);

  const [isInViewport, setIsInViewport] = useState(false);
  const rootRef = React.createRef<HTMLDivElement>();
  useViewportObserver(setIsInViewport, rootRef);

  return (
    <div
      id="experiences"
      className={classNames(styles.root, className)}
      ref={rootRef}
    >
      <motion.div
        variants={rootVariants}
        animate={isInViewport ? "inViewport" : "notInViewport"}
        initial={"notInViewport"}
      >
        <motion.h1 variants={childrenVariants}>
          Mes expériences de développeur
        </motion.h1>
        <div className={styles.experiences_wrapper}>
          <motion.div
            variants={childrenVariants}
            className={styles.experience_selector}
            id="experience-selector"
          >
            <motion.div
              variants={childrenVariants}
              className={styles[`selected_margin--${selectedIndex}`]}
            />

            {experiences.map((experience, index) => (
              <motion.button
                variants={childrenVariants}
                className={classNames(
                  styles.button,
                  index === selectedIndex && styles.selected
                )}
                key={experience.title}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                {experience.company}
              </motion.button>
            ))}
          </motion.div>
          <div id="display-experience">
            {experiences.map((experience, index) => (
              <Experience
                variants={childrenVariants}
                key={experience.dates}
                {...experience}
                isShown={index === selectedIndex}
                isExperiencesInViewport={isInViewport}
                body={
                  <>
                    {experience.body.map((item, index) =>
                      typeof item === "string" ? (
                        <motion.p variants={childrenVariants} key={index}>
                          {item}
                        </motion.p>
                      ) : (
                        <motion.div
                          className={styles.ul}
                          variants={childrenVariants}
                          key={index}
                        >
                          <motion.h2
                            variants={childrenVariants}
                            className={styles.ul_title}
                          >
                            {item[0]}
                          </motion.h2>
                          <motion.ul variants={childrenVariants}>
                            {item.slice(1).map((bullet) => (
                              <li>{bullet}</li>
                            ))}
                          </motion.ul>
                        </motion.div>
                      )
                    )}
                  </>
                }
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experiences;
