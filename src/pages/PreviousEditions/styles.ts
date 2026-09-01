import styled from "styled-components";
import fundo from "../../../public/assets/images/LABIC_BRASIL/background_labic.png";

export const StyledContainer = styled.div`
    background-image: url(${fundo});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const EditionTxt = styled.text`
    text-align: justify;
`;

export const EditionImg = styled.img`

`;