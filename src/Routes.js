import Home from './pages/Home';
import About from './pages/About';
import Todo from './pages/Todo';

import AdminContainer from './pages/admin/AdminContainer';
import AdminHome from './pages/admin/AdminHome';


import AppContainer from './pages/AppContainer';
import NotFound from './pages/NotFound';
import App from './App';

export default [
  {
    ...App,
    
    routes: [

      {
        ...AppContainer,
        routes: [
          {
            ...Home,
            path: '/',
            exact: true
          },
          {
            ...About,
            path: '/about'
          },
          {
            ...Todo,
            path: '/todo'
          },
        ],
      },

      {
        ...AdminContainer,
        routes: [
          {
            ...AdminHome,
            path: '/admin',
            exact: true
          },
        ]
      },
      
      {
        ...NotFound,
      },

    ],

    
  },
  
 
];
