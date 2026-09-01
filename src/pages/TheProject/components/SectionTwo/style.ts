import styled from "styled-components";
import Innovation from "/assets/images/innovation.jpeg";

export const StyledSectionTwo = styled.section`
    display: flex;
    flex-direction: column;
    background-color: var(--pink-1);
    position: relative;
`;

export const StyledInovation = styled.section`
    display: flex;
    background-color: var(--blue-1);

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const StyledText = styled.section`
    display: flex;
    flex-direction: column;
    padding: 8rem 8rem;
    width: 70%;
    background-color: var(--blue-1);
    position: relative;
    overflow: hidden;

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        padding: 2rem;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 5rem;
    font-weight: 600;
    line-height: 1.25;
    font-family: var(--poppins);
    color: var(--purple-1);
    width: 30rem;
    z-index: 2;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;

export const StyledItalic = styled.span`
    font-style: italic;
`;

export const StyledContent = styled.p`
    font-family: var(--open-sans);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5;
    color: #ffffff;
    width: 80%;
    z-index: 2;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

export const StyledImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Innovation});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 40%;

    @media (max-width: 1024px) {
        width: 100%;
        height: 30rem;
    }
`;
