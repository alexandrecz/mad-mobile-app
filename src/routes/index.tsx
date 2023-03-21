import { useRoutes } from 'react-router-dom';
import { AppRoute, appRoutes } from './appRoutes';

export const routes: AppRoute[] = appRoutes;

export function ApplicationRoutes(): JSX.Element {
  const element = useRoutes(routes);

  return <>{element}</>;
}
