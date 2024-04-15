import { cx } from 'classix';
import { useTranslation } from 'react-i18next';

import { SearchField } from 'shared/ui/SearchField/SearchField';

import styles from './ArticlesSearch.module.scss';

interface IArticlesSearchProps {
  className?: string;
  search: string;
  onSearchChange: (search: string) => void;
}

export const ArticlesSearch = (props: IArticlesSearchProps) => {
  const { className, search, onSearchChange } = props;
  const { t } = useTranslation('translation');

  return (
    <div className={cx(styles.search, className)}>
      <SearchField placeholder={t('Поиск')} value={search} onChange={onSearchChange} />
    </div>
  );
};
