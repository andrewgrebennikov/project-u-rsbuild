import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Listbox } from '@/shared/ui/Listbox/Listbox';

import { Country, country } from '../../model/types/countrySchema';

interface ICountrySelect {
  value?: Country;
  readOnly?: boolean;
  onChange?: (value: Country) => void;
}

const options = [
  { value: country.Russia, name: country.Russia },
  { value: country.Belarus, name: country.Belarus },
];

export const CountrySelect = (props: ICountrySelect) => {
  const { value, onChange, readOnly } = props;
  const { t } = useTranslation('translation');

  const onChangeCountry = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return <Listbox options={options} label={t('Страна')} value={value} onChange={onChangeCountry} disabled={readOnly} />;
};
