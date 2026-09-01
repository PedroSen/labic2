import styled from "styled-components";

export const StyledSectionSix = styled.section`
    display: flex;
    background-image: url(/assets/images/labic-pelo-mundo.png);
    padding: 4rem;
    overflow: hidden;
    position: relative;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 2rem;
    }
`;

export const StyledText = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
    padding: 2rem 4rem;
    z-index: 1;

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        padding: 2rem;
    }
`;

export const StyledTitle = styled.h1`
    font-family: var(--poppins);
    font-size: 4rem;
    font-weight: 600;
    color: #FFFFFF;

    @media (max-width: 540px) {
        font-size: 3rem;
    }
`;

export const StyledContent = styled.p`
    font-family: var(--open-sans);
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 500;
    color: white;

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`;

export const StyledFigure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 50%;
    z-index: 1;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const StyledImage = styled.img`
    height: auto;
    width: 100%;
`;
