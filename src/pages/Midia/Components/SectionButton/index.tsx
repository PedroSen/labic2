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
                <ButtonEdition onClick={() => handleClick(1)}>
                    <ButtonText>2021</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(2)}>
                    <ButtonText>2022</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(3)}>
                    <ButtonText>2023</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(4)}>
                    <ButtonText>2024</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(6)}>
                    <ButtonText>2026</ButtonText>
                </ButtonEdition>
            </AuxContainer>
        </Container1>
    );
};

export default SectionButton;