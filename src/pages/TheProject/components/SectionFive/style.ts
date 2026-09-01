import styled from "styled-components";

export const StyledSectionFive = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: var(--purple-1);
`;

export const StyledCards = styled.section`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 4rem 0;
    z-index: 1;

    @media (max-width: 540px) {
        gap: 1rem;
        padding: 2rem 0;
    }
`;

export const StyledCard = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 25rem;
    height: 25rem;
    padding: 2rem;
    font-family: var(--open-sans);
    background-color: #ffffff;

    @media (max-width: 540px) {
        width: 21rem;
        height: 21rem;
        padding: 1rem;
        gap: 1rem;
    }
`;

export const StyledIcon = styled.img`
    width: 5rem;
    height: 5rem;
`;

export const StyledTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const StyledContent = styled.p`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

export const StyledLink = styled.a`
    font-size: 1.2rem;
    font-weight: 700;
    color: #000000;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        font-weight: 800;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;
