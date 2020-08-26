import {
  GET_JOKE_REQUEST, GET_JOKE_SUCCESS, GET_JOKE_FAIL,
  LIKE_JOKE, DELETE_JOKE
} from '../actions/jokes';

const initialState = {
  list: [],
  favorites: [],
  fetching: false
};

const likeJoke = (id, favorites) => {
  if (favorites.includes(id)) {
    return favorites.filter(favoriteId => favoriteId !== id);
  }
  return [...favorites, id]
};

const deleteJoke = (id, jokes) => jokes.filter(({ id: jokeId }) => jokeId !== id);

export const isJokeUniq = (joke, jokes) => {
  let isUniq = true;
  jokes.some(({ id }) => {
    if (id === joke.id) {
      isUniq = false;
      return true;
    }
    return false;
  });
  return isUniq;
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOKE_REQUEST:
      return { ...state, fetching: true };
    case GET_JOKE_SUCCESS:
      return { ...state, list: isJokeUniq(action.joke, state.list) ? [...state.list, action.joke] : state.list, fetching: false };
    case GET_JOKE_FAIL:
      return { ...state, fetching: false };
    case LIKE_JOKE:
      return { ...state, favorites: likeJoke(action.id, state.favorites) };
    case DELETE_JOKE:
      return { ...state, list: deleteJoke(action.id, state.list) };
    default:
      return state;
  }
};

export default jokesReducer;
