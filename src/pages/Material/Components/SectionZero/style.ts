import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 5rem;
    overflow-x: hidden;
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`;

export const Container2 = styled.div`
    max-width: 550px;
    max-height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    

`;

export const EbookLogo = styled.img`
    width: 650px;
    height: 500px;

    @media (max-width: 768px) {
        width: 350px;
        height: 300px;
    }

    @media (max-width: 540px) {
        width: 350px;
        height: 300px;
    }

`;