import { cx } from 'classix';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Listbox } from '@/shared/ui/Listbox/Listbox';

import { ArticlesSortField } from '../../model/types/articles';

import styles from './ArticlesSort.module.scss';

interface IArticlesSortProps {
  className?: string;
  sort: ArticlesSortField;
  onSortChange: (sort: ArticlesSortField) => void;
}

export const ArticlesSort = (props: IArticlesSortProps) => {
  const { className, sort, onSortChange } = props;
  const { t } = useTranslation('translation');

  const options = useMemo(
    () => [
      {
        value: ArticlesSortField.CREATED,
        name: t('По дате публикации'),
      },
      {
        value: ArticlesSortField.VIEWS,
        name: t('По популярности'),
      },
      {
        value: ArticlesSortField.TITLE,
        name: t('По названию'),
      },
    ],
    [t],
  );

  const handleSortChange = (sort: string) => {
    onSortChange(sort as ArticlesSortField);
  };

  return (
    <div className={cx(styles.sort, className)}>
      <Listbox label={t('Сортировать')} options={options} value={sort} onChange={handleSortChange} />
    </div>
  );
};
