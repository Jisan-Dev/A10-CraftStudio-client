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
import ProductDetails from '../pages/ProductDetails';
import UpdateCraftItem from '../pages/UpdateCraftItem';
import AllCraftItems from '../pages/AllCraftItems';
import Category from '../pages/Category';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch('https://a10-craft-studio-server-d0tjibpzg-jisans-projects.vercel.app/allProducts'),
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
        path: '/all-art&craft-items',
        element: <AllCraftItems />,
        loader: () => fetch('https://a10-craft-studio-server-d0tjibpzg-jisans-projects.vercel.app/allProducts'),
      },
      {
        path: '/category/:name',
        element: <Category />,
      },
      {
        path: '/productDetails/:id',
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
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
      {
        path: '/updateProduct/:id',
        element: (
          <PrivateRoute>
            <UpdateCraftItem />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
