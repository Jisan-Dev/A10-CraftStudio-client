import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import App from '../App';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
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
    ],
  },
]);

export default router;
