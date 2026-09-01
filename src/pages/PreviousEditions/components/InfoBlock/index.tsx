import {FC} from 'react';
import { InfoText, StyledBlock } from './style';

interface InfoProps {
    num: string;
    info: string;
}

const InfoBlock: FC<InfoProps> = ({num, info}) => {
    return(
        <StyledBlock>
            <InfoText>{num}</InfoText>
            <InfoText>{info}</InfoText>
        </StyledBlock>
    )
}

export default InfoBlock