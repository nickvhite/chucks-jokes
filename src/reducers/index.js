import { combineReducers } from 'redux';

import jokes from './jokes';
import categories from './categories';

const rootReducer = combineReducers({
  jokes,
  categories
});

export default rootReducer;
