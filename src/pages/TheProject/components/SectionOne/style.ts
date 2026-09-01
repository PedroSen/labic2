import styled from "styled-components";

export const StyledSectionOne = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: #ffffff;
    font-family: var(--open-sans);
    padding-bottom: 4rem;
    position: relative;
    background-color: var(--purple-1);
    overflow: hidden;
`;

export const StyledExperiences = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 2;
`;

export const StyledText = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 50rem;
    gap: 1rem;

    @media (max-width: 1024px) {
        padding: 0 2rem;
    }
`;

export const StyledTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 540px) {
        font-size: 1.25rem;
    }
`;

export const StyledContent = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`;

export const StyledVideo = styled.video`
    object-fit: cover;
    width: 25rem;
    height: 25rem;

    @media (max-width: 540px) {
        width: 20rem;
        height: 20rem;
    }
`;
