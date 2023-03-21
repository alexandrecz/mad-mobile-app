import styled from "@emotion/styled"
import { colors } from "../../constants/colors";

export const HeaderContainer = styled.header`
    color: ${colors.darkblue};
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    line-height: 5rem;
    min-height: 5rem;
    width: 100%;    
    margin: auto;
    padding-left: 20px;
    box-shadow: 0 4px 6px -6px ${colors.darkShadow};
    @media screen and (min-width: 600px) {
        flex-direction: row;        
    }
`;