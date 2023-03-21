import { useEffect, useMemo } from "react";
import { UserActions } from "../components/user-actions/UserActions"
import { UserList } from "../components/user-list/UserList"
import { useUserProviderContext } from "../context/user.provider";
import { User } from "../models/interfaces/user.interface";

const UsersPage = (): JSX.Element => {

    const userContext = useUserProviderContext();
    const { data, loading } = userContext;

    const memoizedData = useMemo(() => {
        if (data.length === 0) {
            userContext.fetchData()
        }
    }, []);


    return (
        <>
            <UserActions />
            {loading && <p>Loading....</p>}
            {data && <UserList users={data as User[]} />}
        </>
    )
}

export { UsersPage }