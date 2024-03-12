import { ReactNode, useEffect, useMemo, useState } from 'react';

import { THEME_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

import { Theme, ThemeContext } from '../lib/ThemeContex';

interface IThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider = (props: IThemeProviderProps) => {
  const { children, defaultTheme = Theme.LIGHT } = props;
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(Theme.LIGHT, Theme.DARK, Theme.RED);

    if (theme === Theme.LIGHT) {
      root.classList.add(Theme.LIGHT);
    } else if (theme === Theme.DARK) {
      root.classList.add(Theme.DARK);
    } else {
      root.classList.add(Theme.RED);
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
        setTheme(theme);
      },
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
