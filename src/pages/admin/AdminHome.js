import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div>
      <h1>Admin Home</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/todo">Todo</Link>
    </div>
  );
};

export default { component: AdminHome };