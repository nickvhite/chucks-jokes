import {
  GET_JOKE_REQUEST, GET_JOKE_SUCCESS, GET_JOKE_FAIL,
  LIKE_JOKE, EDIT_JOKE, DELETE_JOKE
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

const editJoke = ({ id, value }, jokes) => {
  const newJokes = [...jokes];
  newJokes.some((joke) => {
    if (joke.id === id) {
      joke.value = value;
      return true;
    }
    return false;
  });
  return newJokes;
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOKE_REQUEST:
      return { ...state, fetching: true };
    case GET_JOKE_SUCCESS:
      return { ...state, list: [...state.list, action.joke], fetching: false };
    case GET_JOKE_FAIL:
      return { ...state, fetching: false };
    case LIKE_JOKE:
      return { ...state, favorites: likeJoke(action.id, state.favorites) };
    case DELETE_JOKE:
      return { ...state, jokes: deleteJoke(action.id, state.jokes) };
    case EDIT_JOKE:
      return { ...state, jokes: editJoke(action.payload, state.jokes) };
    default:
      return state;
  }
};

export default jokesReducer;
