import { cx } from 'classix';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';

import styles from './TextField.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends HTMLInputProps {
  className?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export const TextField = memo((props: IInputProps) => {
  const { className, type = 'text', label, value, onChange, placeholder, ...otherProps } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <label className={cx(className, styles.field)}>
      <span>
        {label && <span className={styles.label}>{label}</span>}
        <input
          type={type}
          value={value}
          onChange={handleChange}
          className={styles.input}
          placeholder={placeholder}
          {...otherProps}
        />
      </span>
    </label>
  );
});
