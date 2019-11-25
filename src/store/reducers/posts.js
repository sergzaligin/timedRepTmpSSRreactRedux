import { FETCH_POSTS, FETCH_POST } from '../types';

const initialState = {

	posts: [],
  postView: {},

};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
      	...state,
      	posts: action.payload
      }
    case FETCH_POST:
      return {
      	...state,
		    postView: action.payload
      }
    default:
      return state;
  }
};