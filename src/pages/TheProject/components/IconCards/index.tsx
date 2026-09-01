import {
    StyledCards,
    StyledCard,
    StyledCardIcon,
    StyledCardTitle
} from "./style";
import DevelopmentIcon from "/assets/icons/lamp.png"
import SupportIcon from "/assets/icons/support.png"
import AccelerateIcon from "/assets/icons/accelerometer.png"

const IconCards = () => {
    return (
        <StyledCards>
            <StyledCard>
                <StyledCardIcon
                    src={DevelopmentIcon}
                    width="8rem"
                    height="auto"
                    position="top-left"
                />
                <StyledCardTitle>Desenvolver</StyledCardTitle>
            </StyledCard>
            <StyledCard>
                <StyledCardIcon
                    src={SupportIcon}
                    width="10rem"
                    height="auto"
                    position="bottom-left"
                />
                <StyledCardTitle>Apoiar</StyledCardTitle>
            </StyledCard>
            <StyledCard>
                <StyledCardIcon
                    src={AccelerateIcon}
                    width="8rem"
                    height="auto"
                    position="bottom-right"
                />
                <StyledCardTitle>Acelerar</StyledCardTitle>
            </StyledCard>
        </StyledCards>
    );
};

export default IconCards;
