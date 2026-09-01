import { FC } from "react";
import { AuxContainer, ButtonEdition, ButtonText, Container1 } from "./style";

interface ButtonFunc {
    onClick: (section: number) => void;
}

const SectionButton: FC<ButtonFunc> = ({ onClick }) => {
    const handleClick = (section: number) => {
        onClick(section);
    };

    return (
        <Container1>
            <AuxContainer>
                <ButtonEdition onClick={() => handleClick(0)}>
                    <ButtonText>INOVAÇÃO CIDADÃ</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(1)}>
                    <ButtonText>DIVERSIDADE INCLUSAO E NOVOS FORMATOS NO JORNALISMO POS CULTURA DIGITAL</ButtonText>
                </ButtonEdition>

            </AuxContainer>

        </Container1>
    );
};

export default SectionButton;