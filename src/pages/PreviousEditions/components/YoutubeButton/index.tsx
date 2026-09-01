import {FC} from 'react';
import { StyledButton, StyledContainer, StyledText } from './style';


interface ButtonProps {
    disabled?: boolean;
    text: string;
    size?: 'small' | 'medium' | 'large';
    url?: string;
}
 
const YoutubeButton: FC<ButtonProps> = ({text, disabled, size, url}) => {
    const onClick = () => {
        url && !disabled ? window.open(url, '_blank') : null;
    }
    return(
        <StyledContainer>
            <StyledButton disabled={disabled} size={size} onClick={onClick}>
                <StyledText>{text}</StyledText>
            </StyledButton>
        </StyledContainer>
    )
};

export default YoutubeButton;