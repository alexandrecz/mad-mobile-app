import { memo } from "react"
import { User } from "../../models/interfaces/user.interface"
import { UserCardBottom, UserCardContainer, UserCardEditIcon, UserCardName, UserCardImage, UserCardTop, UserCardLocation, UserCardEmail, UserCardPhone } from "./UserCard.styled"
import userEdit from "../../assets/user-edit.svg"
import { useNavigate } from 'react-router-dom';

type UserCardProps = {
    user?: User,
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {

    const navigate = useNavigate();
    const goToUserDetails = () => {
        navigate(`/user/${user?.email}`);
    }

    return (
        <UserCardContainer>
            <UserCardTop>
                <UserCardEditIcon src={userEdit} onClick={() => goToUserDetails()} />
                <UserCardName>
                    {`${user?.name.first} ${user?.name.last}`}
                </UserCardName>
            </UserCardTop>
            <UserCardImage src={user?.picture.large} />
            <UserCardBottom>
                <UserCardEmail>{user?.email}</UserCardEmail>
                <UserCardPhone>{user?.phone}</UserCardPhone>
                <UserCardLocation>{`${user?.location.city}, ${user?.location.state}`}</UserCardLocation>
            </UserCardBottom>
        </UserCardContainer>
    )
}

export default memo(UserCard);