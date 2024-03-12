import { cx } from 'classix';
import { HTMLAttributes, memo, useState } from 'react';
import { useSelector } from 'react-redux';

import IconArrowLeft from 'shared/assets/icons/icon-arrow-left.svg';
import IconArrowRight from 'shared/assets/icons/icon-arrow-right.svg';
import { IconButton } from 'shared/ui/IconBtn/IconButton';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import styles from './Sidebar.module.scss';

interface ISidebarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Sidebar = memo((props: ISidebarProps) => {
  const { className, ...otherProps } = props;
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const handleSidebarClick = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className={cx(styles.sidebar, className, collapsed && styles.collapsed)} data-testid="sidebar" {...otherProps}>
      <nav className={styles.nav}>
        {sidebarItemList.map((item) => {
          return <SidebarItem item={item} key={item.path} collapsed={collapsed} />;
        })}
      </nav>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <IconButton className={styles.toggle} onClick={handleSidebarClick} data-testid="sidebar-toggle">
        {collapsed ? (
          <IconArrowRight width="30" height="30" className="icon" />
        ) : (
          <IconArrowLeft width="30" height="30" className="icon" />
        )}
      </IconButton>
    </div>
  );
});
