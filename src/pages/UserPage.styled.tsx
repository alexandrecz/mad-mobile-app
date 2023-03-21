import styled from "styled-components";
import { ActionButton } from "../components/user-actions/UserActions.styled";
import { UserCardBottom, UserCardContainer, UserCardImage, UserCardName, UserCardTop } from "../components/user-card/UserCard.styled";
import { colors } from "../constants/colors";

export const UserPageContainer = styled(UserCardContainer)`
    margin: 20px;    
    min-width: 350px;
    width: auto;
    max-width: 600px;
    height: 520px;    
`;

export const UserPageTop = styled(UserCardTop)`
    width: 100%;
    height: 100px;   
`;

export const UserPageName = styled(UserCardName)`
    color: ${colors.gray};
    font-size: 16px;  
    margin: 0 0 22px 0;
`;

export const UserPageImage = styled(UserCardImage)`
    width: 160px;
    height: 160px;
    transform: translateY(-88px) translateX(130px);
`;

export const UserPageBottom = styled(UserCardBottom)`
    margin: 20px;
`;

export const UserPageForm = styled.div``;

export const UserPageInput = styled.input`
    color: ${colors.gray};    
    font-size: 16px;
    padding: 14px;
    border: none;
    border-radius:4px 0 0 4px;
    border-bottom: 2px solid ${colors.darkblue};    
    width: 100%;
    outline: none;
    &:hover,
    &:focus {
        outline: none;
        border-bottom: 2px solid ${colors.lightBlue}; 
    }
`;

export const UserPageFormActions = styled.div`
    display: flex;
    margin: 10px 0;
    justify-content: flex-end;
`;

export const UserPageButtonSave = styled(ActionButton)`
    padding: 8px;
    border-radius:4px;   
    height:38px;
    width: 100px;    
    font-size:14px;        
`;