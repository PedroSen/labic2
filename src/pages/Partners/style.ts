import styled from "styled-components";
import fundo from "../../../public/assets/images/LABIC_BRASIL/background_labic.png";    

export const Container = styled.div`
    background-image: url(${fundo});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    gap: 5rem;
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

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

