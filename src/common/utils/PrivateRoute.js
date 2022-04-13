import { Navigate } from 'react-router-dom';
import { routes } from 'routes';

export const PrivateRoute = ({ transferTokenStatus, children }) => {
  return transferTokenStatus ? children : <Navigate to={routes.home} />;
};
