import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Preview from '../components/Posts/Preview';

import { fetchPostsPreview } from '../store/actions';

const Home = ({ fetchPostsPreview, postPreview }) => {

  useEffect(() => {
    fetchPostsPreview();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/todo">Todo</Link>
      <br />
      <Link to="/admin">Admin</Link>
      <br />
      <br />
      <Preview postPreview={ postPreview } />
    </div>
  );
};

const loadData = (store, param) => {
  return [ 
    store.dispatch(fetchPostsPreview(param)),
  ];
};

const mapStateToProps = state => ({
  postPreview: state.postPage.postPreview
});

const mapDispatchToProps = { fetchPostsPreview };

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home),
  loadData
};
