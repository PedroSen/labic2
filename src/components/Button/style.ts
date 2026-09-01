import styled from "styled-components";

interface StyledTextProps {
    color?: string;
    fontSize?: string;
    fontWeight?: number;
}

interface StyledIconProps {
    width?: string;
    height?: string;
}

interface StyledButtonProps {
    color?: string;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    fontSize?: string;
    fontWeight?: number;
    disabled?: boolean;
}

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledText = styled.p<StyledTextProps>`
    color: ${({ color }) => color};
    font-family: var(--open-sans);
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
`;

export const StyledIcon = styled.img<StyledIconProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: 1.5rem;
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) =>
        backgroundColor ? backgroundColor : "#FFFFFF"};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-family: var(--open-sans);
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.8);
    }

    padding: ${({ size }) => {
        switch (size) {
            case "small":
                return "0.5rem 1.5rem";
            case "large":
                return "1.5rem 4.5rem";
            case "medium":
            default:
                return "1rem 3rem";
        }
    }};
`;
