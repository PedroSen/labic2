import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
    z-index: 2;

    @media (max-width: 1280px) {
        gap: 2rem;
        padding: 2rem 0;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }
`;

export const StyledNumberBox = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;

    @media (max-width: 1280px) {
        width: auto;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const StyledNumberWithPlus = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledPlusSign = styled.p`
    font-size: 4rem;
    font-family: var(--poppins);
    color: #ffffff;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const StyledDescription = styled.p`
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    font-family: var(--poppins);
    text-align: center;
    line-height: 1.25;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;
