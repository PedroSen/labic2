import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`

export const Title = styled.h1`
    font-family: var(--open-sans);
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
`;