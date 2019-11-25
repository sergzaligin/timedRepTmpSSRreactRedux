// admin
import Admin from './admin';
import Post from './post';
// main
import Application from './application';

import Root from '../App';
import NotFound from '../pages/NotFound';

export default [
  {
     ...Root,
    routes: [
      ...Application,
      ...Post,
      ...Admin,
      {
        ...NotFound,
      },
    ]
  },
]