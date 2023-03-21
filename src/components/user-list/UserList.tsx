import { User } from "../../models/interfaces/user.interface"
import UserCard from "../user-card/UserCard"
import { UserListSection } from "./UserList.styled"

type UserListProps = {
    users?: User[]
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <UserListSection>
            {users?.map(user => (
                <UserCard key={user.email} user={user} />
            ))}
        </UserListSection>
    )
}

export { UserList }