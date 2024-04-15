import { cx } from 'classix';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError: FC<IPageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('translation');

  return (
    <div className={cx(styles.container, className)} data-testid="page-error">
      <h1 className={styles.title}>{t('Произошла ошибка')}</h1>
      <p className={styles.subtitle}>{t('Попробуйте обновить страницу или зайти позже')}</p>
    </div>
  );
};
