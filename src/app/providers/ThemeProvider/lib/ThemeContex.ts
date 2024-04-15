import { createContext } from 'react';

import { ValueOf } from 'shared/lib/types/valueOf';

export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

export type Theme = ValueOf<typeof Theme>;

interface IThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

const initialState: IThemeContextProps = {
  theme: Theme.SYSTEM,
  setTheme: () => null,
};

export const ThemeContext = createContext<IThemeContextProps>(initialState);
