import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingBlock } from '@/entities/Rating';
import { getAuthData } from '@/entities/User';

import { useArticleRating, useRateArticle } from '../api/articleRatingApi';

export interface IArticleRatingProps {
  className?: string;
  articleId: string | undefined;
}

const ArticleRating = (props: IArticleRatingProps) => {
  const { articleId } = props;
  const { t } = useTranslation('translation');
  const authData = useSelector(getAuthData);

  const {
    data: articleRating,
    isLoading,
    refetch: refetchArticleRating,
  } = useArticleRating({ articleId, userId: authData?.id });
  const rating = articleRating?.[0]?.rate;

  const [rateArticleMutation] = useRateArticle();

  const handleFeedbackSubmit = useCallback(
    (rate: number | undefined, feedback?: string) => {
      try {
        rateArticleMutation({ articleId, userId: authData?.id, rate, feedback });
        refetchArticleRating();
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, authData?.id, rateArticleMutation, refetchArticleRating],
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
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте свой отзыв о статье')}
      rating={rating}
      onAccept={handleAccept}
      onCancel={handleCancel}
      hasFeedback
    />
  );
};

export default ArticleRating;
