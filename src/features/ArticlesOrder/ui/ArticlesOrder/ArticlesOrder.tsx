import { cx } from 'classix';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Listbox } from '@/shared/ui/Listbox';

import { ArticlesOrderField } from '../../model/types/articles';

import styles from './ArticlesOrder.module.scss';

interface IArticlesOrderProps {
  className?: string;
  order: ArticlesOrderField;
  onOrderChange: (order: ArticlesOrderField) => void;
}

export const ArticlesOrder = (props: IArticlesOrderProps) => {
  const { className, order, onOrderChange } = props;
  const { t } = useTranslation('translation');

  const options = useMemo(
    () => [
      {
        value: ArticlesOrderField.ASC,
        name: t('По возрастанию'),
      },
      {
        value: ArticlesOrderField.DESC,
        name: t('По убыванию'),
      },
    ],
    [t],
  );

  const handleOrderChange = (order: string) => {
    onOrderChange(order as ArticlesOrderField);
  };

  return (
    <div className={cx(styles.order, className)}>
      <Listbox label={t('Сортировать')} options={options} value={order} onChange={handleOrderChange} />
    </div>
  );
};
