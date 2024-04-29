import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import App from '../App';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';
import Homepage from '../pages/Homepage';
import AddCraftItem from '../pages/AddCraftItem';
import PrivateRoute from './PrivateRoute';
import MyCraftList from '../pages/MyCraftList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch('http://localhost:5000/allProducts'),
      },
      {
        path: 'app',
        element: <App />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/add-craft-item',
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-art&craft_list',
        element: (
          <PrivateRoute>
            <MyCraftList />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
