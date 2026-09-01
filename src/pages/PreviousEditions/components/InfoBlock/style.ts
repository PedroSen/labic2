import styled from "styled-components";

export const StyledBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f83efb;
    width: 200px;
    height: 82px;
    gap: 0.5rem;
    border-radius: 8px;
`;

export const InfoText = styled.text`
    color: white;
    font-family: var(--open-sans);
    font-size: 1.25rem;
    text-align: center;
    font-weight: 700;
`;