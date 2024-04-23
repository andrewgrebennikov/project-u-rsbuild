import { StoryContext, StoryFn } from '@storybook/react';
import { useEffect } from 'react';

import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const theme = context?.globals?.colorScheme;

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

  return (
    <ThemeProvider defaultTheme={theme}>
      <Story />
    </ThemeProvider>
  );
};
