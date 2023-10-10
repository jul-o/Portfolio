import { motion, Variants } from "framer-motion";
import { ReactElement, useEffect, useState } from "react";
import classNames from "utils/classNames";
import styles from "./Experience.module.scss";
import { rootVariants } from "utils/slideInVariants";
import Image from "next/image";

interface Props {
  isShown?: boolean;
  isExperiencesInViewport?: boolean;
  title: string;
  dates: string;
  technologies: Array<{
    name: string;
    percentage: number;
    iconFiletype?: string;
    color?: string;
    link: string;
  }>;
  tldr?: Array<string>;
  body?: ReactElement;
  variants?: Variants;
}

const Experience = ({
  title,
  dates,
  technologies,
  tldr,
  body,
  isShown = true,
  isExperiencesInViewport = true,
  variants,
}: Props) => {
  const experienceVariants: Variants = {
    notInViewport: ({ isExperiencesInViewport, isShown }) => ({
      ...rootVariants.notInViewport,
      // disappear instantly when switching experiences
      ...(isExperiencesInViewport ||
        (!isShown && {
          display: "none",
          transition: {},
        })),
    }),
    inViewport: {
      ...rootVariants.inViewport,
      // reappear before the slide in, in case of switching experiences
      display: "inherit",
      transition: {
        ...rootVariants.inViewport.transition,
        staggerChildren: 0.03,
      },
    },
  };

  return (
    <motion.div
      animate={
        isShown && isExperiencesInViewport ? "inViewport" : "notInViewport"
      }
      variants={experienceVariants}
      custom={{ isExperiencesInViewport }}
      initial={"notInViewport"}
    >
      <div className={styles.titles}>
        <motion.h2 variants={variants}>{title}</motion.h2>
        <motion.p variants={variants} className={styles.dates}>
          {dates}
        </motion.p>
      </div>
      <div className={styles.technologies}>
        {technologies.map(({ name, color, iconFiletype, link }) => (
          <a href={link} target="_blank" className={styles.technology_link}>
            <motion.span
              className={classNames(styles.technology, color && styles[color])}
              variants={variants}
              key={name}
            >
              <img
                className={styles.logo}
                src={`/icons/${color}-logo.${
                  iconFiletype !== undefined ? iconFiletype : "svg"
                }`}
                alt=""
              />
              <span>{name}</span>
            </motion.span>
          </a>
        ))}
      </div>
      <div className={styles.tldr}>
        <motion.h3 variants={variants}>TL;DR :</motion.h3>
        <motion.ul variants={variants}>
          {tldr && tldr.map((item) => <li key={item}>{item}</li>)}
        </motion.ul>
      </div>
      <div className={styles.body}>{body}</div>
    </motion.div>
  );
};

export default Experience;
