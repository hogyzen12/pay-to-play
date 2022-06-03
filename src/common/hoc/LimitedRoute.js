import { Navigate } from 'react-router-dom';
import { useProvider } from 'common/hooks';
import { routes } from 'routes';

export const LimitedRoute = ({ component: Component }) => {
  const { providerPubKey } = useProvider();

  return providerPubKey ? Component : <Navigate to={routes.home} />;
};
