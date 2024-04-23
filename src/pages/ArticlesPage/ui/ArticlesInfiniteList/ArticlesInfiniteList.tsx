import { useSelector } from 'react-redux';

import { getArticlesView } from '@/features/ArticlesViewSelector';

import { ArticlesList } from '@/entities/Article';

import { getArticlesError } from '../../model/selectors/getArticlesError/getArticlesError';
import { getArticles } from '../../model/slice/articlesSlice';

interface IArticlesInfiniteListProps {
  className?: string;
  isLoading?: boolean;
}

export const ArticlesInfiniteList = (props: IArticlesInfiniteListProps) => {
  const { className, isLoading } = props;
  const articles = useSelector(getArticles.selectAll);
  const error = useSelector(getArticlesError);
  const view = useSelector(getArticlesView);

  return <ArticlesList className={className} articles={articles} isLoading={isLoading} view={view} error={error} />;
};
