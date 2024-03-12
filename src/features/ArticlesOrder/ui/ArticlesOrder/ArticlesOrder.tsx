import { cx } from 'classix';

import { Select } from 'shared/ui/Select/Select';

import { ArticlesOrderField } from '../../model/types/articles';

import styles from './ArticlesOrder.module.scss';

interface IArticlesOrderProps {
  className?: string;
  order: ArticlesOrderField;
  onOrderChange: (order: ArticlesOrderField) => void;
}

const options = [
  {
    value: ArticlesOrderField.ASC,
    name: 'По возрастанию',
  },
  {
    value: ArticlesOrderField.DESC,
    name: 'По убыванию',
  },
];

export const ArticlesOrder = (props: IArticlesOrderProps) => {
  const { className, order, onOrderChange } = props;

  const handleOrderChange = (order: string) => {
    onOrderChange(order as ArticlesOrderField);
  };

  return (
    <div className={cx(styles.order, className)}>
      <Select label="Сортировать" options={options} value={order} onChange={handleOrderChange} />
    </div>
  );
};
