import styled from "styled-components";


export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledButton = styled.button`
    display: flex;
    width: 450px;
    height: 84px;
    justify-content: center;
    background-color:#ffffff;
    align-items: center;
    gap: 0.5rem;
    border: none;
    cursor: pointer;
    border-radius: 20px;

    @media (max-width: 768px) {
        width: 300px;
        height: 50px;
    }

    @media (max-width: 540px) {
        width: 300px;
        height: 50px;
    }
`;

export const StyledText = styled.text`
    color: black;
    font-weight: 700;
    font-family: var(--open-sans);
    font-size: 2rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }
    
`