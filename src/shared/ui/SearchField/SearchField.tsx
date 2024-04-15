import { cx } from 'classix';
import { ChangeEvent, InputHTMLAttributes } from 'react';

import IconSearch from '../../assets/icons/icon-search.svg';

import styles from './SearchField.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type'>;

interface ISearchFieldProps extends HTMLInputProps {
  className?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export const SearchField = (props: ISearchFieldProps) => {
  const { className, label, value, onChange, placeholder = 'Поиск', ...otherProps } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <label className={cx(className, styles.searchField)}>
      <span>
        {label && <span className={styles.label}>{label}</span>}
        <span className={styles.inputWrapper}>
          <input
            type="search"
            value={value}
            onChange={handleChange}
            className={styles.input}
            placeholder={placeholder}
            {...otherProps}
          />
          <IconSearch className={cx('icon', styles.icon)} width="18" height="17" />
        </span>
      </span>
    </label>
  );
};
