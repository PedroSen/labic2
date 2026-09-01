import styled from "styled-components";

export const StyledContainer = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
`;

export const Container1 = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`;

export const Container2 = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;