import { cx } from 'classix';

import { Select } from 'shared/ui/Select/Select';

import { ArticlesSortField } from '../../model/types/articles';

import styles from './ArticlesSort.module.scss';

interface IArticlesSortProps {
  className?: string;
  sort: ArticlesSortField;
  onSortChange: (sort: ArticlesSortField) => void;
}

const options = [
  {
    value: ArticlesSortField.CREATED,
    name: 'По дате публикации',
  },
  {
    value: ArticlesSortField.VIEWS,
    name: 'По популярности',
  },
  {
    value: ArticlesSortField.TITLE,
    name: 'По названию',
  },
];

export const ArticlesSort = (props: IArticlesSortProps) => {
  const { className, sort, onSortChange } = props;

  const handleSortChange = (sort: string) => {
    onSortChange(sort as ArticlesSortField);
  };

  return (
    <div className={cx(styles.sort, className)}>
      <Select label="Сортировать" options={options} value={sort} onChange={handleSortChange} />
    </div>
  );
};
