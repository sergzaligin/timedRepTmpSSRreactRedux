import React from 'react';
import { Link } from 'react-router-dom';

export default ({ postView }) => {

  return (
    <div>
      <div><Link to="/" />Home</div>
      <h1>{ postView.title } - id={ postView.id }</h1>
      <div>
		{ postView.body }
      </div>
    </div>
  );
};
