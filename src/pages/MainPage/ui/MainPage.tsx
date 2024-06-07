import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page/Page';

import { useCounter } from '@/shared/hooks/useCount';

const MainPage = () => {
  const { t } = useTranslation('translation');
  const { count, increment, decrement } = useCounter();

  useEffect(() => {
    document.title = t('Главная страница');
  }, [t]);

  return (
    <Page>
      <h1>{t('Главная страница')}</h1>
      <p>{t('Описание главной страницы')}</p>
      <button onClick={increment}>{t('Увеличить')}</button>
      <button onClick={decrement}>{t('Уменьшить')}</button>
      <div>{count}</div>
    </Page>
  );
};

export default MainPage;
