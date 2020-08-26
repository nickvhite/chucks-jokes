import { createSelector } from 'reselect';

const getReducer = state => state.categories || {};

export const selectList = createSelector(
  getReducer,
  ({ list }) => list
);

export const selectCurrentCategory = createSelector(
  getReducer,
  ({ currentCategory }) => currentCategory
);

export const selectFetching = createSelector(
  getReducer,
  ({ fetching }) => fetching
);

export const selectShowedList = createSelector(
  getReducer,
  ({ showedList }) => showedList
);
