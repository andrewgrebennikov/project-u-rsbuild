import { Dialog, Transition } from '@headlessui/react';
import { cx } from 'classix';
import { Fragment, ReactNode } from 'react';

import styles from './Modul.module.scss';

interface IModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = (props: IModalProps) => {
  const { children, isOpen, onClose, className } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className={styles.dialog}>
        <Transition.Child
          as={Fragment}
          enter={styles.enter}
          enterFrom={styles.enterFrom}
          enterTo={styles.enterTo}
          leave={styles.leave}
          leaveFrom={styles.leaveFrom}
          leaveTo={styles.leaveTo}
        >
          <div className={styles.overlay} aria-hidden="true" />
        </Transition.Child>
        <div className={styles.modal}>
          <div className={styles.content}>
            <Transition.Child
              as={Fragment}
              enter={styles.enter}
              enterFrom={styles.enterFrom}
              enterTo={styles.enterTo}
              leave={styles.leave}
              leaveFrom={styles.leaveFrom}
              leaveTo={styles.leaveTo}
            >
              <Dialog.Panel className={cx(styles.panel, className)}>{children}</Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
