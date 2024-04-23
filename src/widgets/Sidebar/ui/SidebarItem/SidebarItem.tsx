import { cx } from 'classix';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';

import { ArticlesCategoriesField, getArticlesCategory } from '@/features/ArticlesCategory';
import { ArticlesOrderField, getArticlesOrder } from '@/features/ArticlesOrder';
import { getArticlesSearch } from '@/features/ArticlesSearch';
import { ArticlesSortField, getArticlesSort } from '@/features/ArticlesSort';

import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

import { SidebarItemType } from '../../model/types/sidebarItems';

import styles from './SidebarItem.module.scss';

interface ISidebarItemProps {
  className?: string;
  item: SidebarItemType;
}

export const SidebarItem = memo((props: ISidebarItemProps) => {
  const { className, item } = props;
  const { t } = useTranslation('translation');

  // start Костыль (позже нужен fix)
  const [searchParams] = useSearchParams();
  const sort = useSelector(getArticlesSort);
  const order = useSelector(getArticlesOrder);
  const search = useSelector(getArticlesSearch);
  const type = useSelector(getArticlesCategory);

  sort !== ArticlesSortField.CREATED && searchParams.set('sort', sort);
  order !== ArticlesOrderField.ASC && searchParams.set('order', order);
  type !== ArticlesCategoriesField.ALL && searchParams.set('type', type);
  search.length && searchParams.set('search', search);

  if (item.path === RoutePath.articles()) {
    return (
      <NavLink
        to={{ pathname: item.path, search: searchParams.toString() }}
        className={({ isActive }) => cx(styles.navLink, className, isActive && styles.navLinkActive)}
      >
        {item.Icon && <item.Icon className="icon" width="20" height="20" />}
        <span className={cx(styles.label)}>{t(item.name)}</span>
      </NavLink>
    );
  }
  // end Костыль

  if (item.path === RoutePath.create_article()) {
    return (
      <NavLink to={item.path} className={cx(styles.navLink, className, styles.navLinkCreate)}>
        {t(item.name)}
      </NavLink>
    );
  }

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) => cx(styles.navLink, className, isActive && styles.navLinkActive)}
    >
      {item.Icon && <item.Icon className="icon" width="20" height="20" />}
      <span className={cx(styles.label)}>{t(item.name)}</span>
    </NavLink>
  );
});
