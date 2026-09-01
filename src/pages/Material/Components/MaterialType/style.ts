import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: 40rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`

export const ButtonDiv = styled.button`
    width: 200px;
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    border: none;
    cursor: pointer;
    border-radius: 10px;
    @media (max-width: 768px) {
        width: 200px;
        height: 54px;
    }

    @media (max-width: 540px) {
        width: 200px;
        height: 54px;
    }
`;

export const MaterialText = styled.p`
    font-size: 1.2rem;
    color: white;
    font-family: var(--open-sans);
    font-weight: 700;
    text-align: center;
`;