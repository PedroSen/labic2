import styled from "styled-components";
import fundo from "../../../public/assets/images/LABIC_BRASIL/background_labic.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    background-image: url(${fundo});
    background-size: cover;
    background-position: center;
`