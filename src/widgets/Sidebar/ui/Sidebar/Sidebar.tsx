import { cx } from 'classix';
import { HTMLAttributes, memo } from 'react';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import styles from './Sidebar.module.scss';

interface ISidebarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Sidebar = memo((props: ISidebarProps) => {
  const { className, ...otherProps } = props;
  const sidebarItemList = useSelector(getSidebarItems);

  return (
    <div className={cx(styles.sidebar, className)} data-testid="sidebar" {...otherProps}>
      <nav className={styles.nav}>
        {sidebarItemList.map((item) => {
          return <SidebarItem item={item} key={item.path} />;
        })}
      </nav>
    </div>
  );
});
