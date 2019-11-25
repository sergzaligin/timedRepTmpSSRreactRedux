import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchTodos, fetchNewTodos } from '../store/actions';

// eslint-disable-next-line no-shadow
const Todo = ({ fetchTodos, todos, fetchNewTodos, newtodos }) => {

  useEffect(() => {
    fetchTodos();
    fetchNewTodos();
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/admin">Admin</Link>
      <br />
      <hr />
      <div>
      <br />
      {newtodos.map(newtodo => (
        <p key={newtodo.id}>
          {newtodo.id} {newtodo.name}
        </p>
      ))}
      
      </div>
      <hr />
      <br />
      {todos.map(todo => (
        <p key={todo.id}>
          {todo.id} {todo.title}
        </p>
      ))}
    </div>
  );
};

const loadData = (store, param) => {
  return [ 
    store.dispatch(fetchTodos(param)),
    store.dispatch(fetchNewTodos(param))
  ];
};

const mapStateToProps = state => ({
  todos: state.todoPage.todos,
  newtodos: state.todoPage.newtodos,
});

const mapDispatchToProps = { fetchTodos, fetchNewTodos };

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Todo),
  loadData
};
