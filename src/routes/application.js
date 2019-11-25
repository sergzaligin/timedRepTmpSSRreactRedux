import Home from '../pages/Home';
import Todo from '../pages/Todo';
import About from '../pages/About';

export default [

  {
    path: "/",
    exact: true,
    ...Home,
  },
  {
    path: "/about",
    ...About,
  },
  {
    path: "/todo",
    ...Todo,
  },


];