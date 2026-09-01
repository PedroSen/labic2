import { ButtonContainer, 
    ButtonIcon, 
    ButtonText, 
    ButtonAuxDiv, 
    //DownloadText, 
    ButtonAuxDiv1 } from "./style";
import{FC} from 'react';
import Donwload from "/assets/icons/icons8-baixar-64.png";
interface ButtonProps {

    disabled?: boolean;
    text: string;
    url?: string;

}


const MaterialButton: FC<ButtonProps> = ({text, url, disabled}) => {
    const onClick = () => {
        url && !disabled ? window.open(url, '_blank') : null;
    }
    return (
            <ButtonContainer onClick={onClick}>
                <ButtonAuxDiv1>
                    <ButtonText>{text}</ButtonText>
                </ButtonAuxDiv1>
                <ButtonAuxDiv>
                    {/*<DownloadText>Download</DownloadText>*/}
                    <ButtonIcon src= {Donwload}/>
                </ButtonAuxDiv>
            </ButtonContainer>

    
    )
}

export default MaterialButton;