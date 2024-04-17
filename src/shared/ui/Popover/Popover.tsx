import { Popover as HPopover } from '@headlessui/react';
import { cx } from 'classix';
import { ReactNode } from 'react';

import styles from './Popover.module.scss';

interface IPopoverProps {
  className?: string;
  buttonClassName?: string;
  panelClassName?: string;
  buttonContent: ReactNode;
  children: ReactNode;
}

export const Popover = (props: IPopoverProps) => {
  const { className, children, buttonContent, panelClassName, buttonClassName } = props;

  return (
    <HPopover className={cx(styles.popover, className)}>
      <HPopover.Button className={cx(styles.button, buttonClassName)}>{buttonContent}</HPopover.Button>
      <HPopover.Panel className={cx(styles.panel, panelClassName)}>{children}</HPopover.Panel>
    </HPopover>
  );
};
