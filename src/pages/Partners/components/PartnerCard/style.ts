import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const PartnerImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 247px;
    max-height: 242px;
`;

export const PartnerName = styled.p`
    font-family: var(--open-sans);
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
`;

export const PartnerDescripton = styled.p`
    font-family: var(--poppins);
    font-size: 1rem;
    color: #ffffff;
    text-align: center;
`;

