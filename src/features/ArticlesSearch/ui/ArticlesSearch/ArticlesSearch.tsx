import { cx } from 'classix';

import { Input } from 'shared/ui/Input/Input';

import styles from './ArticlesSearch.module.scss';

interface IArticlesSearchProps {
  className?: string;
  search: string;
  onSearchChange: (search: string) => void;
}

export const ArticlesSearch = (props: IArticlesSearchProps) => {
  const { className, search, onSearchChange } = props;

  return (
    <div className={cx(styles.search, className)}>
      <Input placeholder="Поиск..." value={search} onChange={onSearchChange} />
    </div>
  );
};
