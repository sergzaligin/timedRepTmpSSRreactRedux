import axios from 'axios';

import { SET_HELLO, FETCH_TODOS, FETCH_NEWTODOS } from './types';

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