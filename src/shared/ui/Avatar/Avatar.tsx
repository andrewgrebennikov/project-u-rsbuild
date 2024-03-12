import { cx } from 'classix';

import styles from './Avatar.module.scss';

interface IAvatarProps {
  className?: string;
  src: string | undefined;
  width?: string | number;
  height?: string | number;
  alt: string | undefined;
}

export const Avatar = (props: IAvatarProps) => {
  const { className, src, height = 100, width = 100, alt } = props;

  return (
    <div className={cx(styles.avatar, className)}>
      <img className={styles.image} src={src} width={width} height={height} alt={alt} />
    </div>
  );
};
