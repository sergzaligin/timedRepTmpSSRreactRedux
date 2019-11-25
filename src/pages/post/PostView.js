import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPostView } from '../../store/actions';

const PostView = (props) => {

  useEffect(() => {
    document.title = 'Просмотр поста';
    props.fetchPostView(props.match.params.id);
  }, []);

  return (
    <div>
      <h1>Post title id={props.match.params.id}</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/todo">Todo</Link>
    </div>
  );
};

const loadData = (store, param) => {
  return [ store.dispatch(fetchPostView(param))];
};

const mapStateToProps = state => ({
  postView: state.postPage.todos,
});

const mapDispatchToProps = { fetchPostView };

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostView),
  loadData
};
