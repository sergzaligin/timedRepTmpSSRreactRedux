import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import View from '../../components/Posts/View';

import { fetchPostView } from '../../store/actions';

const PostView = (props) => {

  useEffect(() => {
    //document.title = 'Просмотр поста';
    props.fetchPostView(props.match.params.id);
  }, [props.match.params.id]);

  return <div><h1>{ props.postView.title }</h1></div>;
};

const loadData = (store, id) => {
  return [store.dispatch(fetchPostView(id))];
};

const mapStateToProps = state => ({
  postView: state.postPage.postView,
});

const mapDispatchToProps = { fetchPostView };

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostView),
  loadData
};
