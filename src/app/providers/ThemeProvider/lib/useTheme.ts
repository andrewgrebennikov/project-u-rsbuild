import { useContext } from 'react';

import { Theme, ThemeContext } from './ThemeContex';

interface IUseTheme {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): IUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      setTheme?.(Theme.DARK);
    } else if (theme === Theme.DARK) {
      setTheme?.(Theme.RED);
    } else {
      setTheme?.(Theme.LIGHT);
    }
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
