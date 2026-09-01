import styled from "styled-components";

interface StyledButtonProps {
    size?: 'small' | 'medium' | 'large';
}


export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    justify-content: center;
    background-color: #17c2cb69;
    align-items: center;
    border-radius: 10px;
    gap: 0.5rem;
    border: none;
    padding: ${({size}) => {
        switch (size) {
            case 'small':
                return '1.35rem 1.35rem';
            case 'large':
                return '1.35rem 1.35rem';
            case 'medium':
            default:
                return '1.35rem 1.35rem';
        }
    }};
    cursor: pointer;
`;

export const StyledText = styled.text`
    color: white;
    font-weight: 700;
    font-family: var(--open-sans);
    font-size: 1.2rem;
`