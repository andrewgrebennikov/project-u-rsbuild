import { ReactNode, useEffect, useMemo, useState } from 'react';

import { THEME_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorage';

import { Theme, ThemeContext } from '../lib/ThemeContex';

interface IThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider = (props: IThemeProviderProps) => {
  const { children, defaultTheme = Theme.SYSTEM } = props;
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme) || defaultTheme,
  );

  useEffect(() => {
    const root = document.documentElement;
    const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = () => {
      root.classList.remove(Theme.LIGHT, Theme.DARK);

      if (theme === Theme.SYSTEM) {
        const systemTheme = themeQuery.matches ? 'dark' : 'light';

        root.classList.add(systemTheme);
      } else {
        root.classList.add(theme);
      }
    };

    handleThemeChange();

    themeQuery.addEventListener('change', handleThemeChange);

    return () => {
      themeQuery.removeEventListener('change', handleThemeChange);
    };
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
