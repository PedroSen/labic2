import { FC } from "react";
import { StyledText, StyledContainer } from "./style";

interface TitleProps {
    text: string;
    color?: string;
    backgroundColor?: string;
    textWidth?: string;
}

const Title: FC<TitleProps> = ({ text, color, backgroundColor, textWidth }) => {
    return (
        <StyledContainer color={color} backgroundColor={backgroundColor}>
            <StyledText width={textWidth} color={color}>{text}</StyledText>
        </StyledContainer>
    );
};

export default Title;
