import Axios from "axios";
import { useState } from "react";
import { API_URL } from "../constants/env";
import { UserEnumQuery } from "../constants/user.enums";
import { User } from "../models/interfaces/user.interface";

export function useUserContext(): {
  loading: boolean;
  data: User[];
  fetchData(): Promise<void>;
  fetchDataById(id: string): User;
  fetchDataBy(queryType: UserEnumQuery, query: string): void;
  sortDataBy(sortType: UserEnumQuery): void;
} {
  const [data, setData] = useState<User[]>([]);
  const [dataContext, setContext] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await Axios.get(`${API_URL}/?results=12`);
      const users = response.data.results;
      users && setData(users);
      users && setContext(users);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataById = (id: string): User => {
    const userD = data.find((user) => user.email === id) as User;
    return userD;
  };

  const fetchDataBy = (queryType: UserEnumQuery, query: string): void => {
    const filtered = data.filter((user) => {
      let filterType = user.name.first === query;

      switch (queryType) {
        case UserEnumQuery.NAME: {
          filterType = user.name.first === query;
          break;
        }
        case UserEnumQuery.EMAIL: {
          filterType = user.email === query;
          break;
        }
        case UserEnumQuery.PHONE: {
          filterType = user.phone === query;
          break;
        }
        case UserEnumQuery.CITY: {
          filterType = user.location.city === query;
          break;
        }
      }
      return filterType;
    });

    query !== "" ? setData(filtered) : setData(dataContext);
  };

  const sortDataBy = (sortType: UserEnumQuery): void => {
    const sortedType = (userParam1: User, userParam2: User) => {
      switch (sortType) {
        case UserEnumQuery.NAME:
          return userParam1.name.first > userParam1.name.first ? 1 : -1;
        case UserEnumQuery.EMAIL:
          return userParam1.email > userParam1.email ? 1 : -1;
        case UserEnumQuery.PHONE:
          return userParam1.phone > userParam1.phone ? 1 : -1;
        case UserEnumQuery.CITY:
          return userParam1.location.city > userParam1.location.city ? 1 : -1;
      }
    };

    const strAscending = [...data].sort((a, b) => sortedType(a, b));

    setData(strAscending);
  };

  return {
    loading,
    data,
    fetchData,
    fetchDataById,
    fetchDataBy,
    sortDataBy,
  };
}
