import axios from 'axios';

import { 
  SET_HELLO, 
  FETCH_TODOS, 
  FETCH_NEWTODOS, 
  FETCH_POSTS, 
  FETCH_POST, 
  FETCH_POST_PREVIEW 
} from './types';

export const setHello = payload => ({
  type: SET_HELLO,
  payload
});

export const fetchTodos = () => async dispatch => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos'
  );

  dispatch({
    type: FETCH_TODOS,
    payload: response.data
  });
};

export const fetchNewTodos = () => async dispatch => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  dispatch({
    type: FETCH_NEWTODOS,
    payload: response.data
  });
};


export const fetchPosts = () => async dispatch => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
};

export const fetchPostsPreview = () => async dispatch => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  dispatch({
    type: FETCH_POST_PREVIEW,
    payload: response.data
  });
};

export const fetchPostView = (id) => async dispatch => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  dispatch({
    type: FETCH_POST,
    payload: response.data
  });
};