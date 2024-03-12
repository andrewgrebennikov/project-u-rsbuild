import { cx } from 'classix';

import IconGrid from 'shared/assets/icons/icon-grid.svg';
import IconList from 'shared/assets/icons/icon-list.svg';
import { IconButton } from 'shared/ui/IconBtn/IconButton';

import { ArticlesView } from '../../model/types/articles';

import styles from './ArticlesViewSelector.module.scss';

interface IArticleViewProps {
  className?: string;
  view?: ArticlesView;
  onViewChange?: (view: ArticlesView) => void;
}

const views = [
  {
    viewType: ArticlesView.LIST,
    icon: <IconList width="24" height="24" />,
  },
  {
    viewType: ArticlesView.GRID,
    icon: <IconGrid width="24" height="24" />,
  },
];

export const ArticlesViewSelector = (props: IArticleViewProps) => {
  const { className, onViewChange, view } = props;

  const handleViewChange = (newView: ArticlesView) => () => {
    onViewChange?.(newView);
  };

  return (
    <div className={cx(styles.articlesView, className)}>
      {views.map((viewItem, index) => {
        const { icon, viewType } = viewItem;

        return (
          <IconButton
            key={index}
            onClick={handleViewChange(viewType)}
            className={cx(viewType === view && styles.articlesViewActive)}
          >
            {icon}
          </IconButton>
        );
      })}
    </div>
  );
};
