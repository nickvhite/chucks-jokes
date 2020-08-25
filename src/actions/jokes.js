import communicate from '../communicate';

export const GET_JOKE_REQUEST = 'GET_JOKE_REQUEST';
export const GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS';
export const GET_JOKE_FAIL = 'GET_JOKE_FAIL';

export const LIKE_JOKE = 'LIKE_JOKE';
export const EDIT_JOKE = 'EDIT_JOKE';
export const DELETE_JOKE = 'DELETE_JOKE';

const getJokeRequest = () => dispatch => dispatch({ type: GET_JOKE_REQUEST });
const getJokeSuccess = joke => dispatch => dispatch({ type: GET_JOKE_SUCCESS, joke });
const getJokeFail = () => dispatch => dispatch({ type: GET_JOKE_FAIL });

const likeJoke = id => dispatch => dispatch({ type: LIKE_JOKE, id });
const editJoke = (id, value) => dispatch => dispatch({ type: EDIT_JOKE, payload: { id, value } });
const deleteJoke = id => dispatch => dispatch({ type: DELETE_JOKE, id });

const getJoke = (category) => (dispatch) => {
  dispatch(getJokeRequest());
  let request = {
    path: 'random'
  };
  if (category) {
    request.data = { category };
  }
  return communicate(request)
    .then(joke => dispatch(getJokeSuccess(joke)))
    .catch(err => dispatch(getJokeFail(err)));
};
