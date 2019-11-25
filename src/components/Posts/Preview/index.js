import React from 'react';
import { Link } from 'react-router-dom';

export default ({ postPreview }) => {

  return (
    <div>
      <h2>Анонс статей:</h2>
      <ul>
		{
			postPreview.map(post => {
				return <li key={ post.id }><Link to={`/post/view/${ post.id }`} >{ post.title }</Link></li>; 
			})
		}
      </ul>
    </div>
  );
};