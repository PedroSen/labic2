import styled from "styled-components";

interface StyledIconProps {
    width: string;
    height: string;
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const getPositionStyles = (position: StyledIconProps["position"]) => {
    switch (position) {
        case "top-left":
            return `transform: translate(-90%, -50%);`;
        case "top-right":
            return `transform: translate(90%, -50%);`;
        case "bottom-left":
            return `transform: translate(-53%, 17.5%);`;
        case "bottom-right":
            return `
                bottom: -0.9rem;
                right: -2.3rem;
            `;
        default:
            return "";
    }
};

export const StyledCards = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 2;
`;

export const StyledCard = styled.div`
    background-color: var(--pink-1);
    width: 15rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const StyledCardIcon = styled.img<StyledIconProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: absolute;
    ${(props) => getPositionStyles(props.position)};
`;

export const StyledCardTitle = styled.h3`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
`;
