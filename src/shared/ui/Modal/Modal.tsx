import { cx } from 'classix';
import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { Portal } from '../Portal/Portal';

import styles from './Modul.module.scss';

interface IModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Modal: FC<PropsWithChildren<IModalProps>> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const [isMounted, setIsMounted] = useState(false);

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
      setIsMounted(false);
    }
  }, [onClose]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  if (!isMounted && lazy) {
    return null;
  }

  return (
    <Portal>
      <div className={cx(className, styles.modal, isOpen && styles.open)}>
        <div className={styles.overlay} onClick={handleClose}></div>
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};
