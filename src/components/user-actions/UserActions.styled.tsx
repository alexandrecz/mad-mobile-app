import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export const ActionInput = styled.input`
    color: ${colors.gray};    
    font-size: 16px;
    padding: 14px;
    border: none;
    border-radius:4px 0 0 4px;
    border-bottom: 2px solid ${colors.darkblue};    
    width: 250px;
    outline: none;
    &:hover,
    &:focus {
        outline: none;
        border-bottom: 2px solid ${colors.lightBlue}; 
    }
`;

export const ActionSelect = styled.select`
    height: 48px;
    color: ${colors.gray}; 
    font-size: 16px;
    font-weight: 100;
    cursor: pointer;    
    border: none;
    border-radius:4px 0 0 4px;
    border-bottom: 2px solid ${colors.darkblue};   
    padding: 10px;
    margin-right: 10px;
    transition: color 0.3s ease, background-color 0.3s ease, border-bottom-color 0.3s ease;  
    
    &:hover,
    &:focus {
        outline: none;
        color: ${colors.gray};    
        border-bottom: 2px solid ${colors.lightBlue}; 
    }
    width: 100%;
    
    @media screen and (min-width: 600px) {
        width: 240px;        
    }
`;


export const ActionSelectOrder = styled(ActionSelect)``;


export const ActionContainer = styled.div`
    background: ${colors.lightGray};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    min-height: 14vh;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 2px solid ${colors.darkblue};
    
    @media screen and (min-width: 600px) {
        flex-direction: row;
    }
    
`;

export const ActionOptions = styled.div`
    display: flex;
    padding: 10px;
`;

export const ActionButton = styled.button`    
    cursor: pointer;
    outline: none;
    display:inline-block;
    padding: 8px;
    border-radius:0 4px 4px 0;   
    height:48px;
    width: 80px;
    border:none;
    background-color: ${colors.darkblue};
    color:white;
    font-size:16px;    
    transition: .5s ease-in;   
    &:hover{
        background-color:${colors.lightBlue};
        transition: background-color .5s;
      }
  `;