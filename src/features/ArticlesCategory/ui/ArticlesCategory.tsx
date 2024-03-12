import { cx } from 'classix';

import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';

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

const articlesCategories: IArticlesCategory[] = [
  {
    id: 1,
    value: ArticlesCategoriesField.ALL,
    name: 'Все',
  },
  {
    id: 2,
    value: ArticlesCategoriesField.IT,
    name: 'IT',
  },
  {
    id: 3,
    value: ArticlesCategoriesField.ECONOMY,
    name: 'Экономика',
  },
  {
    id: 4,
    value: ArticlesCategoriesField.SCIENCE,
    name: 'Наука',
  },
];

export const ArticlesCategory = (props: IArticlesCategoryProps) => {
  const { className, category, onCategoryChange } = props;

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
              <AppLink
                className={cx(styles.link, value === category && styles.activeLink)}
                onClick={handleCategoryChange(value)}
                to={{ search: `type=${value}` }}
                variant={AppLinkVariant.OUTLINED}
              >
                {name}
              </AppLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
