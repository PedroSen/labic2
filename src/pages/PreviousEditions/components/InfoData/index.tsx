import {FC} from 'react';
import { InfoDataFig, InfoDataImg, InfoDataTxt, StyledContainer, StyledText } from "./style";

interface InfoData {
    description: string;
    banner: string;
    size?: 'small'|'medium'|'large';
}

const SectionOne: FC<InfoData> = ({description, banner, size}) => {

    return(
        <StyledContainer>
            <StyledText>
                <InfoDataTxt size={size}>{description}</InfoDataTxt>
            </StyledText>
            <InfoDataFig>
                <InfoDataImg src={banner}/>
            </InfoDataFig>
        </StyledContainer>
    )
}

export default SectionOne;