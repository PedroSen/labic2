import {FC} from 'react';
import { StyledButton, StyledContainer, StyledText } from './style';


interface ButtonProps {
    disabled?: boolean;
    text: string;
    url?: string;
}
 
const EbookButton: FC<ButtonProps> = ({text, disabled, url}) => {
    const onClick = () => {
        url && !disabled ? window.open(url, '_blank') : null;
    }
    return(
        <StyledContainer>
            <StyledButton disabled={disabled} onClick={onClick}>
                <StyledText>{text}</StyledText>
            </StyledButton>
        </StyledContainer>
    )
};

export default EbookButton;