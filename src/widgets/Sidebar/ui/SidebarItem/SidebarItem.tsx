import { cx } from 'classix';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ArticlesCategoriesField, getArticlesCategory } from 'features/ArticlesCategory';
import { ArticlesOrderField, getArticlesOrder } from 'features/ArticlesOrder';
import { getArticlesSearch } from 'features/ArticlesSearch';
import { ArticlesSortField, getArticlesSort } from 'features/ArticlesSort';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkUnderline } from 'shared/ui/AppLink/AppLink';

import { SidebarItemType } from '../../model/types/sidebarItems';

import styles from './SidebarItem.module.scss';

interface ISidebarItemProps {
  className?: string;
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: ISidebarItemProps) => {
  const { className, item, collapsed } = props;
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
      <AppLink
        to={{ pathname: item.path, search: searchParams.toString() }}
        underline={AppLinkUnderline.NONE}
        className={cx(styles.navLink, className)}
        startIcon={<item.Icon className="icon" width="30" height="30" />}
      >
        {!collapsed && <span className={cx(styles.label)}>{t(item.name)}</span>}
      </AppLink>
    );
  }
  // end Костыль

  return (
    <AppLink
      to={item.path}
      underline={AppLinkUnderline.NONE}
      className={cx(styles.navLink, className)}
      startIcon={<item.Icon className="icon" width="30" height="30" />}
    >
      {!collapsed && <span className={cx(styles.label)}>{t(item.name)}</span>}
    </AppLink>
  );
});
