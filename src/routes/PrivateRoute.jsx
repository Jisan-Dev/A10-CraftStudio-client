import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <h1 className="text-center text-red-600 text-6xl font-bold font-gsans">LOADING ..............</h1>;
  }

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={location.pathname} />;
  }
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
