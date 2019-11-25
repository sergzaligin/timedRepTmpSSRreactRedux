import React from 'react';
import { renderRoutes } from 'react-router-config';

const PostContainer = ({ route }) => {
  //debugger;
  return(
    <div>
      { renderRoutes(route.routes) }
    </div>
  );
}

export default { component: PostContainer };