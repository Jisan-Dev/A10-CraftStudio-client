import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  return (
    <div>
      <ToastContainer />
      <ScrollRestoration />
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
