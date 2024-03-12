import { cx } from 'classix';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select/Select';

import { Currency, currency } from '../../model/types/currencySchema';

interface ICurrencySelect {
  className?: string;
  value?: Currency;
  readOnly?: boolean;
  onChange?: (value: Currency) => void;
}

const options = [
  { value: currency.RUB, name: currency.RUB },
  { value: currency.USD, name: currency.USD },
];

export const CurrencySelect = (props: ICurrencySelect) => {
  const { className, value, readOnly, onChange } = props;
  const { t } = useTranslation();

  const onChangeCurrency = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <Select
      className={cx(className)}
      onChange={onChangeCurrency}
      label={t('Валюта')}
      value={value}
      disabled={readOnly}
      options={options}
    />
  );
};
