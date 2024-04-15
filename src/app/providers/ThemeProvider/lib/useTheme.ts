import { useContext } from 'react';

import { Theme, ThemeContext } from './ThemeContex';

interface IUseTheme {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): IUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === Theme.SYSTEM) {
      setTheme?.(Theme.LIGHT);
    } else if (theme === Theme.LIGHT) {
      setTheme?.(Theme.DARK);
    } else {
      setTheme?.(Theme.SYSTEM);
    }
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
