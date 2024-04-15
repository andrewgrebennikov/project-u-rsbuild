import { cx } from 'classix';

import IconGrid from 'shared/assets/icons/icon-grid.svg';
import IconList from 'shared/assets/icons/icon-list.svg';
import { Button } from 'shared/ui/Button/Button';

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
    icon: <IconList className="icon" width="24" height="17" />,
  },
  {
    viewType: ArticlesView.GRID,
    icon: <IconGrid className="icon" width="20" height="20" />,
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
          <Button
            key={index}
            onClick={handleViewChange(viewType)}
            className={cx(styles.viewBtn, viewType === view && styles.viewBtnActive)}
          >
            {icon}
          </Button>
        );
      })}
    </div>
  );
};
