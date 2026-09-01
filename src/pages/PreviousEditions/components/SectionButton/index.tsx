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
                <ButtonEdition onClick={() => handleClick(14)}>
                    <ButtonText>2026.1</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(13)}>
                    <ButtonText>2025.1</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(12)}>
                    <ButtonText>2024.3</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(11)}>
                    <ButtonText>2024.2</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(1)}>
                    <ButtonText>2024.1</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(2)}>
                    <ButtonText>2023</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(3)}>
                    <ButtonText>2022</ButtonText>
                </ButtonEdition>   
            </AuxContainer>
            <AuxContainer>
                <ButtonEdition onClick={() => handleClick(4)}>
                    <ButtonText>2021.2</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(5)}>
                    <ButtonText>2021.1</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(6)}>
                    <ButtonText>2020</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(7)}>
                    <ButtonText>2019 RJ</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(8)}>
                    <ButtonText>2019 S</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(9)}>
                    <ButtonText>2018</ButtonText>
                </ButtonEdition>
                <ButtonEdition onClick={() => handleClick(10)}>
                    <ButtonText>2017</ButtonText>
                </ButtonEdition>
            </AuxContainer>
            
            
        </Container1>
    );
};

export default SectionButton;

