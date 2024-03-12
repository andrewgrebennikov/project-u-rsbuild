import { Article } from '../types/article';

export interface ArticleSchema {
  articleData?: Article;
  isLoading?: boolean;
  error?: string;
}
