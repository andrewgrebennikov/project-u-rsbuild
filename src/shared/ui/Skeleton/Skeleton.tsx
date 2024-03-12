import { cx } from 'classix';
import { CSSProperties, HTMLAttributes } from 'react';

import { ValueOf } from '../../lib/types/valueOf';

import styles from './Skeleton.module.scss';

export const SkeletonVariant = {
  CIRCULAR: 'CIRCULAR',
  RECTANGULAR: 'RECTANGULAR',
} as const;

export type SkeletonVariant = ValueOf<typeof SkeletonVariant>;

interface ISkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  variant?: SkeletonVariant;
  width?: string | number;
  height: string | number;
  style?: CSSProperties;
}

export const Skeleton = (props: ISkeletonProps) => {
  const { className, variant = SkeletonVariant.RECTANGULAR, width = 'auto', height, style, ...otherProps } = props;

  return (
    <span
      style={{ width: `${width}px`, height: `${height}px`, ...style }}
      className={cx(
        styles.skeleton,
        className,
        {
          [SkeletonVariant.CIRCULAR]: styles.skeletonCircular,
          [SkeletonVariant.RECTANGULAR]: styles.skeletonRectangular,
        }[variant],
      )}
      {...otherProps}
    ></span>
  );
};
