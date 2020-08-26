import communicate from '../communicate';

export const GET_JOKE_REQUEST = 'GET_JOKE_REQUEST';
export const GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS';
export const GET_JOKE_FAIL = 'GET_JOKE_FAIL';

export const LIKE_JOKE = 'LIKE_JOKE';
export const DELETE_JOKE = 'DELETE_JOKE';

const getJokeRequest = () => dispatch => dispatch({ type: GET_JOKE_REQUEST });
const getJokeSuccess = joke => dispatch => dispatch({ type: GET_JOKE_SUCCESS, joke });
const getJokeFail = () => dispatch => dispatch({ type: GET_JOKE_FAIL });

export const likeJoke = id => dispatch => dispatch({ type: LIKE_JOKE, id });
export const deleteJoke = id => dispatch => dispatch({ type: DELETE_JOKE, id });

export const getJoke = (category) => (dispatch) => {
  dispatch(getJokeRequest());
  let request = {
    path: 'random'
  };
  if (category && category !== 'all') {
    request.data = { category };
  }
  return communicate(request)
    .then(({ data }) => dispatch(getJokeSuccess(data)))
    .catch(err => dispatch(getJokeFail(err)));
};
