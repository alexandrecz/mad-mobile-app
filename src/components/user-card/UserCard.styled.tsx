import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export const UserCardContainer = styled.div`
    margin: 12px;    
    width: 280px;
    height: 340px;
    background: ${colors.white};
    box-shadow: -2px 3px 10px ${colors.shadow};
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const UserCardTop = styled.div`
    display: flex;
    align-items: center;
    width: inherit;
    height: 200px;
    background: ${colors.darkblue};
    border-radius: 7px 7px 0 0;
`;

export const UserCardEditIcon = styled.img`
    cursor: pointer;    
    display: flex;
    align-self: flex-start;
    margin: 8px 0 0 8px;
    width: 28px;
    height: 28px;
    transition: .5s ease-in;   
    &:hover{
        box-shadow: -2px 3px 10px ${colors.shadow};
        transition: background-color .5s;
      }
`;

export const UserCardName = styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-start;
    margin-top: 20px;
    color: ${colors.white};
    font-size: 22px;
    width: 100%;
`;

export const UserCardEmail = styled(UserCardName)`
    color: ${colors.gray};
    font-size: 16px;
    margin: 0 0 22px 0;
`;

export const UserCardPhone = styled(UserCardEmail)``

export const UserCardLocation = styled(UserCardEmail)``

export const UserCardImage = styled.img`
    object-fit: cover;
    border: 5px solid ${colors.white};
    border-radius: 50%;
    box-shadow: -2px 3px 10px ${colors.shadow};    
    width: 130px;
    height: 130px;
    transform: translateY(-30px);
`;

export const UserCardBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: inherit;
    height: 220px;    
`;