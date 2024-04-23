import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { RatingBlock } from '@/entities/Rating';
import { getAuthData } from '@/entities/User';

import { useArticleRating, useRateArticle } from '../api/articleRatingApi';

export interface IArticleRatingProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  articleId: string | undefined;
}

const ArticleRating = (props: IArticleRatingProps) => {
  const { title, feedbackTitle, hasFeedback, articleId } = props;
  const authData = useSelector(getAuthData);

  const { data: articleRating, isLoading } = useArticleRating({ articleId, userId: authData?.id });
  const rating = articleRating?.[0]?.rate;

  const [rateArticleMutation] = useRateArticle();

  const handleFeedbackSubmit = useCallback(
    (rate: number | undefined, feedback?: string) => {
      try {
        rateArticleMutation({ articleId, userId: authData?.id, rate, feedback });
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, authData?.id, rateArticleMutation],
  );

  const handleAccept = useCallback(
    (rate: number | undefined, feedback?: string) => {
      handleFeedbackSubmit(rate, feedback);
    },
    [handleFeedbackSubmit],
  );

  const handleCancel = useCallback(
    (rate: number | undefined) => {
      handleFeedbackSubmit(rate);
    },
    [handleFeedbackSubmit],
  );

  if (isLoading) {
    return <p>Загрузка рейтинга...</p>;
  }

  return (
    <RatingBlock
      title={title}
      feedbackTitle={feedbackTitle}
      hasFeedback={hasFeedback}
      rating={rating}
      onAccept={handleAccept}
      onCancel={handleCancel}
    />
  );
};

export default ArticleRating;
