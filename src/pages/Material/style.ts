import styled from "styled-components";
import fundo from "../../../public/assets/images/LABIC_BRASIL/background_labic.png";    

export const StyledContainer = styled.div`
    background-image: url(${fundo});
    background-color: var(--black);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const Container1 = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Container2 = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;
`;