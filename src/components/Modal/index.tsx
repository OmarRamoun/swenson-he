import type {FC} from 'react';
import {useEffect} from 'react';

import {motion} from 'framer-motion';

import {Cross} from '@assets/svgs';
import {cn} from '@lib';

import {Center} from '../Center';

import styles from './modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  show: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({children, className, show, onClose}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    }

    if (!show) {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  return (
    <>
      {show ? (
        <motion.div
          className={styles.modal_bg}
          onClick={(event) => {
            if (event.currentTarget === event.target) {
              onClose();
            }
          }}
          initial={{backdropFilter: 'blur(0px)'}}
          animate={{backdropFilter: 'blur(5px)'}}
          exit={{backdropFilter: 'blur(0px)'}}
          transition={{delay: 0.05}}
        >
          <motion.div
            className={cn(styles.modal_content, className)}
            initial={{opacity: 0, y: 35}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 35}}
            transition={{delay: 0.05}}
          >
            <Center className={styles.close_container} onClick={onClose}>
              <Cross className={styles.modal_close} />
            </Center>

            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
};

export {Modal};
