import { cx } from 'classix';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ArticlesCategoriesField } from '../model/types/category';

import styles from './ArticlesCategory.module.scss';

interface IArticlesCategoryProps {
  className?: string;
  category: ArticlesCategoriesField;
  onCategoryChange: (category: ArticlesCategoriesField) => void;
}

interface IArticlesCategory {
  id: number;
  name: string;
  value: ArticlesCategoriesField;
}

export const ArticlesCategory = (props: IArticlesCategoryProps) => {
  const { className, category, onCategoryChange } = props;
  const { t } = useTranslation('translation');

  const articlesCategories: IArticlesCategory[] = useMemo(
    () => [
      {
        id: 1,
        value: ArticlesCategoriesField.ALL,
        name: t('Все'),
      },
      {
        id: 2,
        value: ArticlesCategoriesField.IT,
        name: t('IT'),
      },
      {
        id: 3,
        value: ArticlesCategoriesField.ECONOMY,
        name: t('Экономика'),
      },
      {
        id: 4,
        value: ArticlesCategoriesField.SCIENCE,
        name: t('Наука'),
      },
    ],
    [t],
  );

  const handleCategoryChange = (newCategory: ArticlesCategoriesField) => (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (category !== newCategory) {
      onCategoryChange(newCategory);
    }
  };

  return (
    <div className={cx(styles.categories, className)}>
      <ul className={styles.list}>
        {articlesCategories.map((articlesCategory) => {
          const { id, name, value } = articlesCategory;

          return (
            <li key={id} className={styles.item}>
              <Link
                className={cx(styles.link, value === category && styles.activeLink)}
                onClick={handleCategoryChange(value)}
                to={{ search: `type=${value}` }}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
