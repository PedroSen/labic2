import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`;

export const Container2 = styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`

