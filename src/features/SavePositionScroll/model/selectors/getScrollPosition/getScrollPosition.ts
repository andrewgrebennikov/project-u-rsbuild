import { createSelector } from '@reduxjs/toolkit';

import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getScrollPositionByPathname = createSelector(
  (state: StoreSchema) => state.scroll.scrollPosition,
  (_state: StoreSchema, pathname: string) => pathname,
  (scroll, pathname) => scroll[pathname] || 0,
);
