import type {FC} from 'react';
import {useEffect} from 'react';

import {Cross} from '@assets/svgs';
import {motion, cn} from '@lib';

import {Center} from '../Center';

import styles from './modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  show: boolean;
  onClose: () => void;
}

const CenterMotion = motion(Center);

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
        <CenterMotion
          className={styles.modal_bg}
          onClick={(event) => {
            if (event.currentTarget === event.target) {
              onClose();
            }
          }}
          initial={{backdropFilter: 'blur(0px)'}}
          animate={{backdropFilter: 'blur(5px)'}}
          exit={{backdropFilter: 'blur(0px)'}}
        >
          <motion.div
            className={cn(styles.modal_content, className)}
            initial={{opacity: 0, y: 35}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 35}}
            transition={{delay: 0.05}}
          >
            <Cross className={styles.modal_close} onClick={onClose} />

            {children}
          </motion.div>
        </CenterMotion>
      ) : null}
    </>
  );
};

export {Modal};
