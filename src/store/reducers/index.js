import { combineReducers } from 'redux';

import hello from './hello';
import todos from './todos';
import posts from './posts';

export default combineReducers({
  hello,
  todoPage: todos,
  postPage: posts,
});
