import {
  GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL,
  SET_CURRENT_CATEGORY
} from "../actions/categories";

const initialState = {
  list: [],
  currentCategory: '',
  fetching: false
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return { ...state, fetching: true };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.categories, fetching: false };
    case GET_CATEGORIES_FAIL:
      return { ...state, fetching: false };
    case SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.category };
    default:
      return state;
  }
};

export default categoriesReducer;
