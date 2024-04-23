import { cx } from 'classix';
import { Fragment, useState } from 'react';

import IconStar from '../../assets/icons/icon-star.svg';

import styles from './Rating.module.scss';

interface IRatingProps {
  className?: string;
  rating?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
}

const stars = [1, 2, 3, 4, 5];

export const Rating = (props: IRatingProps) => {
  const { className, rating = 0, onChange, disabled } = props;
  const [value, setValue] = useState(rating);

  const handleRatingChange = (value: number) => () => {
    setValue(value);
    onChange?.(value);
  };

  return (
    <div className={cx(styles.rating, className, disabled && styles.disabled)}>
      {stars.map((star) => {
        return (
          <Fragment key={star}>
            <input
              className={styles.input}
              type="radio"
              name="rating"
              id={String(star)}
              value={star}
              onChange={handleRatingChange(star)}
              disabled={disabled}
            />
            <label htmlFor={String(star)} className={cx(styles.label, star <= value && styles.selected)}>
              <IconStar className="icon" width="32" height="32" />
            </label>
          </Fragment>
        );
      })}
    </div>
  );
};
