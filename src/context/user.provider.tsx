import { createContext, useContext } from "react";
import { RouteProps } from "react-router-dom";
import { UserEnumQuery } from "../constants/user.enums";
import { User } from "../models/interfaces/user.interface";
import { useUserContext } from "./useUserContext";

export interface UserContextInterface {
  data: Array<User>;
  loading: boolean;
  fetchData(): Promise<void>;
  fetchDataById(id: string): User;
  fetchDataBy(querytype: UserEnumQuery, query: string): void;
  sortDataBy(querytype: UserEnumQuery): void;
}

const initUserContext: UserContextInterface = {
  data: [],
  loading: false,
  fetchData: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  fetchDataBy: function (_query: string): void {
    throw new Error("Function not implemented.");
  },
  sortDataBy: function (querytype: UserEnumQuery): void {
    throw new Error("Function not implemented.");
  },
  fetchDataById: function (id: string): User {
    throw new Error("Function not implemented.");
  },  
};

const UserContext = createContext(initUserContext);

const UserProvider = (props: RouteProps): JSX.Element => {
  const { children } = props;
  const userContext = useUserContext();

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

const useUserProviderContext = () => useContext(UserContext);

export { useUserProviderContext, UserProvider };

