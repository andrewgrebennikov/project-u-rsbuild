import { FC, SVGProps } from 'react';

export interface SidebarItemType {
  path: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
  name: string;
  authOnly?: boolean;
}
