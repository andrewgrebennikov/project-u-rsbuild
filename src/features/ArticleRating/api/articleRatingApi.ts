import { Rating } from '@/entities/Rating';

import { rtkApi } from '@/shared/api/rtkApi';

interface ArticleRatingArgs {
  articleId: string | undefined;
  userId: string | undefined;
}

interface RateArticleArgs {
  articleId: string | undefined;
  userId: string | undefined;
  rate: number | undefined;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], ArticleRatingArgs>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArgs>({
      query: (args) => ({
        url: '/article-ratings',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
