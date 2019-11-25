import React from 'react';
import { renderRoutes } from 'react-router-config';

const AdminContainer = ({ route }) => {
  //debugger;
  return(
    <div>
      { renderRoutes(route.routes) }
    </div>
  );
}

export default { component: AdminContainer };