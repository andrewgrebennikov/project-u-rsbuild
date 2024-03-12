import { StoryContext, StoryFn } from '@storybook/react';
import { useEffect } from 'react';

import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const theme = context?.parameters?.theme || context?.globals?.theme;

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

  return (
    <ThemeProvider defaultTheme={theme}>
      <Story />
    </ThemeProvider>
  );
};
