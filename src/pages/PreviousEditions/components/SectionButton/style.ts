import styled from "styled-components";

export const Container1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`;

export const AuxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;

    @media (max-width: 768px) {
        flex-direction: row;
    }

    @media (max-width: 540px) {
        flex-direction: row;
    }
`

interface ButtonEditionProps {
    isSelected?: boolean;
}

export const ButtonEdition = styled.button<ButtonEditionProps>`
    display: flex;
    background-color:white;
    width: 3rem;
    height: 3rem;
    border: white;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    justify-content: center;

`;

export const ButtonEdition1 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
`;

export const ButtonText = styled.p`
    text-align: center;
    color: black;
    font-size: 0.75rem;
    font-weight: 700;
    
`;