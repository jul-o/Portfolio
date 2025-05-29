import { Variants, motion } from 'framer-motion';
import { GiMountainClimbing } from 'react-icons/gi';
import { MdOutlineParagliding } from 'react-icons/md';
import { RiSailboatLine } from 'react-icons/ri';
import classNames from 'utils/classNames';
import styles from './Hobbies.module.scss';

interface Props {
  className?: string;
  openParagliding: () => void;
  openClimbing: () => void;
  openWindsurfing: () => void;
  variants?: Variants;
}

const Hobbies = ({
  className,
  openParagliding,
  openClimbing,
  openWindsurfing,
  variants,
}: Props) => {
  return (
    <div className={classNames(styles.hobbies, className)}>
      <motion.h2 variants={variants} className={styles.hobbies_title}>
        Mes centres d'intérêt
      </motion.h2>
      <div className={styles.buttons}>
        <motion.button
          variants={variants}
          onClick={openParagliding}
          className={styles.buttonParagliding}>
          <MdOutlineParagliding />
        </motion.button>
        <motion.button variants={variants} onClick={openClimbing}>
          <GiMountainClimbing />
        </motion.button>
        <motion.button variants={variants} onClick={openWindsurfing}>
          <RiSailboatLine />
        </motion.button>
      </div>
    </div>
  );
};

export default Hobbies;
