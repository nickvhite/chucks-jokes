import {
  GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAIL,
  SET_CURRENT_CATEGORY, SHOW_LIST
} from "../actions/categories";

export const statuses = ['all', 'favorites'];

const initialState = {
  list: [],
  currentCategory: 'all',
  fetching: false,
  showedList: statuses[0]
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return { ...state, fetching: true };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, list: action.categories, fetching: false };
    case GET_CATEGORIES_FAIL:
      return { ...state, fetching: false };
    case SET_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.category };
    case SHOW_LIST:
      return { ...state, showedList: action.status };
    default:
      return state;
  }
};

export default categoriesReducer;
