import styled from "styled-components";

interface StyledTitleProps {
    backgroundColor?: string;
    color?: string;
}

export const StyledContainer = styled.div<StyledTitleProps>`
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

interface StyledTextProps {
    width?: string;
    color?: string;
} 

export const StyledText = styled.h1<StyledTextProps>`
    font-family: var(--open-sans);
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.color};
    width: ${(props) => props.width};

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;
