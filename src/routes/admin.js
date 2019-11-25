import AdminHome from '../pages/admin/AdminHome';
import AdminContainer from '../pages/admin/AdminContainer';

export default [
  {


      ...AdminContainer,

      routes: [
          {
            path: "/admin",
            exact: true,
            ...AdminHome,
          },
          
      ]

  }
];
