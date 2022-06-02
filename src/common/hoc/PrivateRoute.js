import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routes } from 'routes';

export const PrivateRoute = ({ children }) => {
  const { transferTokenStatus } = useSelector(state => state.provider);

  return transferTokenStatus ? children : <Navigate to={routes.home} />;
};
