import styled from "styled-components";

export const ButtonContainer = styled.button` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 28rem;
    height: 5rem;
    border-radius: 10px;
    border: none;

    cursor: pointer;
`;

export const ButtonText = styled.p` 
    font-family: var(--poppins);
    font-size: 0.8rem;
    width: 100%;
    color: black;
    margin-left: 10px;
    text-align: center;
`;

export const ButtonAuxDiv = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    background-color: var(--blue-1);
    border-radius: 0px 0px 10px 10px;
`;

export const ButtonAuxDiv1 = styled.div` 
    display: flex;
    width: 100%;
    height: 80%;
    align-items: center;
    justify-content: center;
`;

export const DownloadText = styled.p` 
    font-family: var(--open-sans);
    font-size: 1rem;
    color: black;
    margin-left: 10px;
    text-align: left;
`;

export const ButtonIcon = styled.img` 
    width: 30px;
    height: 30px;
    justify-self: flex-end;
`;