import { FETCH_POSTS, FETCH_POST, FETCH_POST_PREVIEW } from '../types';

const initialState = {

	posts: [],
  postView: {},
  postPreview: [],

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
    case FETCH_POST_PREVIEW:
      return {
        ...state,
        postPreview: action.payload
      }
    default:
      return state;
  }
};