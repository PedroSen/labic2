import styled from "styled-components";
import fundo from "../../../public/assets/images/A2025/fundo 1.png";

export const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding-bottom: 4rem;
    overflow-x: hidden;
    background-image: url(${fundo});
`;

export const StyledVideo = styled.div`
    width: 40rem;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px;
    border-color: black;

    @media (max-width: 768px) {
        width: 30rem;
        height: 30rem;
    }

    @media (max-width: 540px) {
        width: 20rem;
        height: 20rem;
    }
`;

export const StyledVideoText = styled.p`
    font-size: 3rem;
    font-weight: 700;
    font-family: var(--open-sans);
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;
