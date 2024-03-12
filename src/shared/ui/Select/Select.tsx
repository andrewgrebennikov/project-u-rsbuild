import { cx } from 'classix';
import { ChangeEvent, memo, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';

import styles from './Select.module.scss';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>;

interface ISelectOption extends OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  name: string;
}

interface ISelectProps extends HTMLSelectProps {
  className?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: ISelectOption[];
}

export const Select = memo((props: ISelectProps) => {
  const { className, label, value, onChange, options, ...otherProps } = props;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <label className={cx(className, styles.field)}>
      <span className={styles.label}>{label}</span>
      <select value={value} onChange={handleChange} className={styles.select} {...otherProps}>
        {options.map((option) => {
          const { value, name } = option;

          return (
            <option value={value} key={value}>
              {name}
            </option>
          );
        })}
      </select>
    </label>
  );
});
