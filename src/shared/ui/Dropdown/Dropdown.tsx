import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './Dropdown.module.scss';

interface IDropdownItemProps {
  id: string;
  href?: string;
  label: string;
  action?: () => void;
}

interface IDropdownProps {
  button: ReactNode;
  items: IDropdownItemProps[];
}

export const Dropdown = (props: IDropdownProps) => {
  const { button, items } = props;

  return (
    <div className={styles.dropdown}>
      <Menu>
        <Menu.Button className={styles.button}>{button}</Menu.Button>
        <Transition
          as={Fragment}
          enter={styles.enter}
          enterFrom={styles.enterFrom}
          enterTo={styles.enterTo}
          leave={styles.leave}
          leaveFrom={styles.leaveFrom}
          leaveTo={styles.leaveTo}
        >
          <Menu.Items className={styles.items} as="ul">
            {items.map((item) => {
              const { href, label, action, id } = item;

              if (href) {
                return (
                  <Menu.Item key={id} as="li">
                    {({ close }) => (
                      <Link className={styles.item} to={href} onClick={close}>
                        {label}
                      </Link>
                    )}
                  </Menu.Item>
                );
              }

              return (
                <Menu.Item key={id} as="li" onClick={action}>
                  <button className={styles.item}>{label}</button>
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
