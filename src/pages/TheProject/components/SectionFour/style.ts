import styled from "styled-components";

export const StyledSectionFour = styled.section`
    display: flex;
    flex-direction: column;
    color: #622def;
    border-radius: 0.5rem;
`;

export const StyledSupport = styled.section`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

export const StyledIcon = styled.img`
    width: 12rem;

    @media (max-width: 540px) {
        width: 10rem;
    }
`;

export const StyledText = styled.section`
    padding: 0 4rem;

    @media (max-width: 768px) {
        padding: 0 2rem;
    }

    @media (max-width: 540px) {
        padding: 0;
    }
`;

export const StyledContent = styled.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    font-family: var(--open-sans);

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 576px) {
        font-size: 1.25rem;
    }
`;

export const StyledBold = styled.span`
    font-weight: 700;
`;

export const StyledLogos = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-2);
`;

export const StyledImage = styled.img`
    width: 20rem;

    @media (max-width: 768px) {
        width: 15rem;
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`;
