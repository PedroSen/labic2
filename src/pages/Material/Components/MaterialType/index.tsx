import{FC} from 'react';
import { ButtonContainer, ButtonDiv, MaterialText } from './style';

interface TypeProps {
    onClick: (section: number) => void;
}

const MaterialType:FC<TypeProps> = ({onClick}) => {
    const handleClick = (section: number) => {
        onClick(section);
    };

    return(
        <ButtonContainer>
            <ButtonDiv onClick={() => handleClick(0)}>
                <MaterialText>Ebook</MaterialText>
            </ButtonDiv>
            <ButtonDiv onClick={() => handleClick(1)}>
                <MaterialText>Mentorias Equipe LABIC</MaterialText>
            </ButtonDiv>
            <ButtonDiv onClick={() => handleClick(2)}>
                <MaterialText>Mentorias Parceiros</MaterialText>
            </ButtonDiv>
            <ButtonDiv onClick={() => handleClick(3)}>
                <MaterialText>Indicações Bibliográficas</MaterialText>
            </ButtonDiv>
        </ButtonContainer>
        
    )
}

export default MaterialType;