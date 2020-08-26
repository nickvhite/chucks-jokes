import communicate from '../communicate';

export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';

export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

export const SHOW_LIST = 'SHOW_LIST';

const getCategoriesRequest = () => dispatch => dispatch({ type: GET_CATEGORIES_REQUEST });
const getCategoriesSuccess = categories => dispatch => dispatch({ type: GET_CATEGORIES_SUCCESS, categories });
const getCategoriesFail = () => dispatch => dispatch({ type: GET_CATEGORIES_FAIL });

export const getCategories = () => (dispatch) => {
  dispatch(getCategoriesRequest());
  return communicate({ path: 'categories' })
    .then(({ data }) => dispatch(getCategoriesSuccess(data)))
    .catch(err => dispatch(getCategoriesFail(err)))
};

export const setCurrentCategory = category =>
    dispatch =>
      dispatch({ type: SET_CURRENT_CATEGORY, category });

export const showList = status =>
  dispatch =>
    dispatch({ type: SHOW_LIST, status });
