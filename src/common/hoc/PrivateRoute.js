import { Navigate } from 'react-router-dom';
import { useProvider } from 'common/hooks';
import { routes } from 'routes';

export const PrivateRoute = ({ component: Component }) => {
  const { transferTokenStatus } = useProvider();

  return transferTokenStatus ? Component : <Navigate to={routes.home} />;
};
