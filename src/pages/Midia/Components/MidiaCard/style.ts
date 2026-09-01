import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const ContentDiv = styled.button`
    background-color: #FFFFFF;
    border-radius: 3rem;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    width: 50rem;
    height: 5rem;
    position: relative;
    padding: 0 4rem 0 4rem;
    gap: 1rem;

    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 540px) {
        width: 85%;
        height: 5rem;
        padding: 0 2rem 0 5.5rem;
    }

`;

export const ButtonText = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    text-align:justify;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }
`

export const ButtonSubText = styled.p`
    font-size: 1.2rem;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }

    @media (max-width: 540px) {
        font-size: 0.6rem;
    }
`;