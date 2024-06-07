import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Listbox } from '@/shared/ui/Listbox';

import { Currency, currency } from '../../model/types/currencySchema';

interface ICurrencySelect {
  value?: Currency;
  readOnly?: boolean;
  onChange?: (value: Currency) => void;
}

const options = [
  { value: currency.RUB, name: currency.RUB },
  { value: currency.USD, name: currency.USD },
];

export const CurrencySelect = (props: ICurrencySelect) => {
  const { value, readOnly, onChange } = props;
  const { t } = useTranslation('translation');

  const onChangeCurrency = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <Listbox onChange={onChangeCurrency} label={t('Валюта')} value={value} disabled={readOnly} options={options} />
  );
};
