import type {FC} from 'react';

import {motion} from 'framer-motion';

import {cn} from '@lib';

import {Center} from '../Center';

import styles from './spinner.module.css';

interface SpinnerProps {
  className?: string;
}

const LoadingDot = {
  display: 'block',
  width: '2rem',
  height: '2rem',
  backgroundColor: 'black',
  borderRadius: '50%',
};

const LoadingContainer = {
  width: '10rem',
  height: '5rem',
  display: 'flex',
  justifyContent: 'space-around',
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: '0%',
  },
  animate: {
    y: '100%',
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
};

const Spinner: FC<SpinnerProps> = ({className}) => (
  <Center className={cn(styles.card, className)}>
    <motion.div style={LoadingContainer} variants={ContainerVariants} initial="initial" animate="animate">
      <motion.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
      <motion.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
      <motion.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
    </motion.div>
  </Center>
);

export {Spinner};
