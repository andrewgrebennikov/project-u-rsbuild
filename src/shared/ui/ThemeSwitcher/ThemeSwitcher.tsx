import { Theme, useTheme } from 'app/providers/ThemeProvider';

import IconDarkTheme from '../../assets/icons/icon-dark-theme.svg';
import IconLightTheme from '../../assets/icons/icon-light-theme.svg';
import IconSystemTheme from '../../assets/icons/icon-system-theme.svg';
import { Button } from '../Button/Button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: IThemeSwitcherProps) => {
  const { className } = props;

  const { toggleTheme, theme } = useTheme();

  return (
    <Button className={className} onClick={toggleTheme}>
      {theme === Theme.DARK && <IconDarkTheme className="icon" width="30" height="30" />}
      {theme === Theme.LIGHT && <IconLightTheme className="icon" width="30" height="30" />}
      {theme === Theme.SYSTEM && <IconSystemTheme className="icon" width="30" height="30" />}
    </Button>
  );
};
