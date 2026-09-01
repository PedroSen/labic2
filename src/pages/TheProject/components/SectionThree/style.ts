import styled from "styled-components";

export const StyledSectionThree = styled.section`
    display: flex;
    padding: 6rem 4rem;
    color: #ffffff;
    font-family: var(--open-sans);
    background-color: var(--purple-1);
    position: relative;
    overflow: hidden;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 4rem 2rem;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 768px) {
        padding: 2rem;
        gap: 2rem;
    }
`;

export const StyledText = styled.section`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    z-index: 2;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0;
    }
`;

export const StyledContent = styled.p`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 540px) {
        font-size: 1.2rem;
    }
`;

export const StyledFigure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    z-index: 2;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 2rem 0;
    }

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const StyledImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
    width: 25rem;
    height: 25rem;
    padding: 2rem;

    @media (max-width: 768px) {
        width: 20rem;
        height: 20rem;
        padding: 0;
    }
`;

export const StyledImg = styled.img`
    width: 40rem;
    height: 20rem;

    @media (max-width: 1024px) {
        width: 20rem;
        height: 15rem;
    }
`;

export const StyledImageText = styled.p`
    font-size: 2.5rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;
