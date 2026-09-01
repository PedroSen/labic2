import styled from "styled-components";
import fundo from "../../../public/assets/images/A2025/fundo 1.png";

export const StyledContainer = styled.div`
    background-image: url(${fundo});
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
`;

export const Container1 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    

`;

export const Container2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    

`;

export const EbookLogo = styled.img`
    width: 100%;
    height: 100%;
    max-width: 432px;
    max-height: 592px;

`;

export const EbookDescription = styled.p`

`;