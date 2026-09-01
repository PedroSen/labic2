import { ButtonText, Container, ContentDiv } from "./style";
import { FC } from "react";

interface ButtonProps {
    disabled: boolean;
    url?: string;
    text: string;
}

const MidiaCard: FC<ButtonProps> = ({disabled, url, text}) => {
    const onClick = () => {
        url && !disabled ? window.open(url, "_blank") : null;
    };

    return(
        <Container>
            <ContentDiv onClick={onClick}>
                <ButtonText>{text}</ButtonText>
            </ContentDiv>
        </Container>
    )
    

}

export default MidiaCard;