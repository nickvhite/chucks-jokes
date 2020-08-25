import { createSelector } from 'reselect';

const getReducer = state => state.categories || {};

export const selectList = createSelector(
  getReducer,
  ({ list }) => list
);

export const selectFetching = createSelector(
  getReducer,
  ({ fetching }) => fetching
);
