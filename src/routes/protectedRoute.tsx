import { ReactElement, ReactNode } from "react";

/**
 * Here is a perfect place to intercpet route
 * and check RBAC acces, or even if user is authenticated 
 */

interface IProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: IProps): JSX.Element => {
  return <>{children}</>;

};
