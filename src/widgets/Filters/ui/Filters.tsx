import { cx } from 'classix';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { fetchArticlesData, articlesActions } from 'pages/ArticlesPage';

import { ArticlesCategoriesField, ArticlesCategory, getArticlesCategory } from 'features/ArticlesCategory';
import { ArticlesOrder, ArticlesOrderField, getArticlesOrder } from 'features/ArticlesOrder';
import { ArticlesSearch, getArticlesSearch } from 'features/ArticlesSearch';
import { ArticlesSort, ArticlesSortField, getArticlesSort } from 'features/ArticlesSort';
import { ArticlesView, ArticlesViewSelector, getArticlesView } from 'features/ArticlesViewSelector';

import { useDebounce } from 'shared/hooks/useDebounce';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import styles from './Filters.module.scss';

interface IFiltersProps {
  className?: string;
}

export const Filters = (props: IFiltersProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesView);
  const sort = useSelector(getArticlesSort);
  const order = useSelector(getArticlesOrder);
  const search = useSelector(getArticlesSearch);
  const category = useSelector(getArticlesCategory);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchData = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(articlesActions.setPage(1));
      dispatch(fetchArticlesData({ replace: true }));
    }
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 500);

  const handleViewChange = (view: ArticlesView) => {
    dispatch(articlesActions.setView(view));
  };

  const handleSortChange = useCallback(
    (newSort: ArticlesSortField) => {
      const isSortCreated = newSort === ArticlesSortField.CREATED;

      dispatch(articlesActions.setSort(newSort));
      fetchData();

      !isSortCreated ? searchParams.set('sort', newSort) : searchParams.delete('sort');
      setSearchParams(searchParams);
    },
    [dispatch, fetchData, searchParams, setSearchParams],
  );

  const handleOrderChange = useCallback(
    (newOrder: ArticlesOrderField) => {
      const isOrderAsc = newOrder === ArticlesOrderField.ASC;

      dispatch(articlesActions.setOrder(newOrder));
      fetchData();

      !isOrderAsc ? searchParams.set('order', newOrder) : searchParams.delete('order');
      setSearchParams(searchParams);
    },
    [dispatch, fetchData, searchParams, setSearchParams],
  );

  const handleSearchChange = useCallback(
    (newSearch: string) => {
      dispatch(articlesActions.setSearch(newSearch));
      debounceFetchData();

      newSearch ? searchParams.set('search', newSearch) : searchParams.delete('search');
      setSearchParams(searchParams);
    },
    [debounceFetchData, dispatch, searchParams, setSearchParams],
  );

  const handleCategoryChange = useCallback(
    (newCategory: ArticlesCategoriesField) => {
      const isCategoryAll = newCategory === ArticlesCategoriesField.ALL;

      dispatch(articlesActions.setType(newCategory));
      debounceFetchData();

      !isCategoryAll ? searchParams.set('type', newCategory) : searchParams.delete('type');
      setSearchParams(searchParams);
    },
    [debounceFetchData, dispatch, searchParams, setSearchParams],
  );

  return (
    <div className={cx(styles.filters, className)}>
      <ArticlesSort onSortChange={handleSortChange} sort={sort} />
      <ArticlesOrder onOrderChange={handleOrderChange} order={order} />
      <ArticlesViewSelector className={styles.articlesView} view={view} onViewChange={handleViewChange} />
      <ArticlesSearch className={styles.articlesSearch} search={search} onSearchChange={handleSearchChange} />
      <ArticlesCategory
        className={styles.articlesCategory}
        category={category}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
};
