import { FETCH_TODOS, FETCH_NEWTODOS } from '../types';

const initialState = {

	todos: [],
	newtodos: []

};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
      	...state,
      	todos: action.payload
      }
    case FETCH_NEWTODOS:
      return {
      	...state,
		newtodos: action.payload
      }
    default:
      return state;
  }
};
