import { createContext } from 'react';

import { ValueOf } from 'shared/lib/types/valueOf';

export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
  RED: 'red',
} as const;

export type Theme = ValueOf<typeof Theme>;

interface IThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

const initialState: IThemeContextProps = {
  theme: Theme.LIGHT,
  setTheme: () => null,
};

export const ThemeContext = createContext<IThemeContextProps>(initialState);
