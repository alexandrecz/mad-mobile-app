
/**
 * Here is we can add all the application routes and also
 * define redirect to login page, or even not found url
 */
import { RouteObject } from 'react-router-dom';
import App from '../App';
import { UserPage } from '../pages/UserPage';
import { UsersPage } from '../pages/UsersPage';
import { ProtectedRoute } from './protectedRoute';

export type AppRoute = {
  title?: string;
  children?: RouteObject[] & AppRoute[];
} & RouteObject;

const children: AppRoute[] = [
  {
    index: true,
    title: 'Users',
    element: <UsersPage />,
  }, 
  {
    index: true,
    title: 'User',
    path: '/user/:userEmail',
    element: <UserPage />,
  }, 
  {
    path: '*',
    title: 'Not Found',
    element: <>{`Not Found`}</>,
  },
];

export const appRoutes: AppRoute[] = [
  {
    path: '/',
    title: 'Home',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children,
  },  
];
