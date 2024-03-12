import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { Button } from '../Button/Button';

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const IconButton: FC<IIconButtonProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <Button className={className} {...otherProps}>
      {children}
    </Button>
  );
};
