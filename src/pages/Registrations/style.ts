import styled from "styled-components";

export const StyledContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--gradient); 
    position: relative;
    overflow: hidden;

    @media (max-width: 540px) {
        gap: 0;
    }
`;

export const StyledContentContainer = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: 2rem;
`;

export const StyledBoxesContainer = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    position: relative;
`;

export const StyledBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
        flex-basis: 100%;
    }
`;

export const StyledBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #ffffff;
    border-radius: 0.5rem;
    width: 40rem;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const StyledTitle = styled.h2`
    text-align: center;
    font-family: var(--poppins);
    font-size: 1.8rem;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }

    @media (max-width: 480px) {
        font-size: 1.4rem;
    }

    @media (max-width: 320px) {
        font-size: 1.2rem;
    }
`;

export const StyledContent = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--blue-1);
    font-family: var(--open-sans);
    font-size: 1.4rem;
    line-height: 1.4;
    padding: 3rem;

    @media (max-width: 768px) {
        padding: 2rem;
        font-size: 1.2rem;
    }

    @media (max-width: 540px) {
        padding: 1rem;
        font-size: 1rem;
    }
`;

export const StyledSubtitle = styled.h3`
    text-align: center;
    font-family: var(--open-sans);
    font-size: 1.4rem;
    font-weight: 600;
`;
