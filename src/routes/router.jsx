import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import App from '../App';
import Register from '../pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'app',
        element: <App />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
