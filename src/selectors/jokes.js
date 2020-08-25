import { createSelector } from 'reselect';

const getReducer = state => state.jokes || {};

export const selectList = createSelector(
  getReducer,
  ({ list }) => list
);

export const selectFavorites = createSelector(
  getReducer,
  ({ favorites }) => favorites
);

export const selectFetching = createSelector(
  getReducer,
  ({ fetching }) => fetching
);
