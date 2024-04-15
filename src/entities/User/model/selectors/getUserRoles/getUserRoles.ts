import { createSelector } from '@reduxjs/toolkit';

import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

import { UserRole } from '../../types/userSchema';

const getUserRoles = (state: StoreSchema) => state.user.authData?.roles;

export const getUserIsAdmin = createSelector(getUserRoles, (roles) => roles?.includes(UserRole.ADMIN));
