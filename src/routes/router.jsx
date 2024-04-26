import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'app',
        element: <App />,
      },
    ],
  },
]);

export default router;
