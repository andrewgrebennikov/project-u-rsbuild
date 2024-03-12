import { createSelector } from '@reduxjs/toolkit';

import { getArticleData } from 'entities/Article';
import { getAuthData } from 'entities/User';

export const getIsEditArticleDetails = createSelector(getArticleData, getAuthData, (article, user) => {
  if (!article || !user) {
    return false;
  }

  return article.userId === user.id;
});
