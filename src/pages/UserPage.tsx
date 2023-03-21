import { useEffect, useState } from "react";
import { ChangeEvent } from 'react';
import { User } from "../models/interfaces/user.interface";
import { useNavigate, useParams } from 'react-router-dom';
import { useUserProviderContext } from "../context/user.provider";
import { UserPageBottom, UserPageButtonSave, UserPageContainer, UserPageForm, UserPageFormActions, UserPageImage, UserPageInput, UserPageTop } from "./UserPage.styled";

const UserPage = (): JSX.Element => {

    const { userEmail } = useParams<'userEmail'>();
    const userContext = useUserProviderContext();
    const { fetchDataById } = userContext;
    const [userData, setUserData] = useState<User>();
    const navigate = useNavigate();

    /**
     * Here we can put handle any changes on the user
     * form, also store on state.
     * @param e 
     */
    const handleFormValues = (e: ChangeEvent<HTMLInputElement>) => {
        const userTemp = { ...userData } as User;
        const valueChanged = e.target.value;

        switch (e.target.attributes[1].value) {
            case 'firstname':
                userTemp.name.first = valueChanged;
                break;
            case 'lastname':
                userTemp.name.last = valueChanged;
                break;
            case 'email':
                userTemp.email = valueChanged;
                break;
            case 'phone':
                userTemp.phone = valueChanged;
                break;
            case 'city':
                userTemp.location.city = valueChanged;
                break;
            case 'state':
                userTemp.location.state = valueChanged;
                break;
        }

        setUserData(userTemp);
    };

    const backToPageList = (): void => {
        navigate('/');
    }

    useEffect(() => {
        if (userEmail && !userData) {
            setUserData(fetchDataById(userEmail));
        }

    }, [userEmail, userData])

    return (
        <UserPageContainer>
            <UserPageTop />
            <UserPageImage src={userData?.picture.large} />
            <UserPageBottom>
                <UserPageForm>
                    <UserPageInput type={'text'} id='firstname' placeholder="First Name" value={userData?.name.first} onChange={handleFormValues}></UserPageInput>
                    <UserPageInput type={'text'} id='lastname' placeholder="Last Name" value={userData?.name.last} onChange={handleFormValues}></UserPageInput>
                    <UserPageInput type={'email'} id='email' placeholder="Email" value={userData?.email} onChange={handleFormValues}></UserPageInput>
                    <UserPageInput type={'tel'} id='phone' placeholder="Phone" value={userData?.phone} onChange={handleFormValues}></UserPageInput>
                    <UserPageInput type={'text'} id='city' placeholder="City" value={userData?.location.city} onChange={handleFormValues}></UserPageInput>
                    <UserPageInput type={'text'} id='state' placeholder="State" value={userData?.location.state} onChange={handleFormValues}></UserPageInput>
                    <UserPageFormActions>
                        <UserPageButtonSave onClick={backToPageList}>Back</UserPageButtonSave>
                    </UserPageFormActions>
                </UserPageForm>
            </UserPageBottom>
        </UserPageContainer >
    )
}

export { UserPage }