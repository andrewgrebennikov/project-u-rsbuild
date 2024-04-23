import { cx } from 'classix';
import { useTranslation } from 'react-i18next';

import { CountrySelect, Country } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';

import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Loader } from '@/shared/ui/Loader/Loader';
import { TextField } from '@/shared/ui/TextField/TextField';

import { Profile } from '../../model/types/profileSchema';

import styles from './ProfileCard.module.scss';

interface IProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCountry?: (value: Country) => void;
  onChangeCurrency?: (currency: Currency) => void;
}

export const ProfileCard = (props: IProfileCardProps) => {
  const {
    className,
    isLoading,
    error,
    data,
    readOnly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props;
  const { t } = useTranslation('translation');

  if (isLoading) {
    return (
      <div className={cx(className, styles.profileCard)}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cx(className, styles.profileCard)}>
        <p>{t('Произошла ошибка')}</p>
      </div>
    );
  }

  return (
    <div className={cx(className, styles.profileCard)}>
      {data?.avatar && (
        <Avatar
          className={styles.avatar}
          src={data.avatar}
          width="150"
          height="150"
          alt={`${data.firstname} ${data.lastname}`}
        />
      )}
      <form action="" className={styles.form}>
        <fieldset className={styles.fieldset}>
          <TextField
            className={styles.input}
            type="text"
            label={t('Имя')}
            value={data?.firstname}
            onChange={onChangeFirstname}
            readOnly={readOnly}
          />
          <TextField
            className={styles.input}
            type="text"
            label={t('Фамилия')}
            value={data?.lastname}
            onChange={onChangeLastname}
            readOnly={readOnly}
          />
          <TextField
            className={styles.input}
            type="number"
            label={t('Возраст')}
            value={String(data?.age)}
            onChange={onChangeAge}
            readOnly={readOnly}
          />
          <TextField
            className={styles.input}
            type="text"
            label={t('Аватар')}
            value={data?.avatar}
            onChange={onChangeAvatar}
            readOnly={readOnly}
          />
          <TextField
            className={styles.input}
            type="text"
            label={t('Город')}
            value={data?.city}
            onChange={onChangeCity}
            readOnly={readOnly}
          />
          <CountrySelect value={data?.country} onChange={onChangeCountry} readOnly={readOnly} />
          <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readOnly={readOnly} />
        </fieldset>
      </form>
    </div>
  );
};
