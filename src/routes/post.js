import PostContainer from '../pages/post/PostContainer';
import PostView from '../pages/post/PostView';

export default [
  {


      ...PostContainer,

      routes: [
          {
            path: "/post/view/:id",
            exact: true,
            ...PostView,
          },
          
      ]

  }
];