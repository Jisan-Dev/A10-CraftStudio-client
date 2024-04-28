import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';

const Root = () => {
  return (
    <div>
      <ToastContainer />
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
