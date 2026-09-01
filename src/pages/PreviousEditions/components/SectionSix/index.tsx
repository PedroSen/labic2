import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/R2020/1.jpeg";
import { TitleH } from "../EditionTitle/style";

import Card1 from "/assets/images/R2020/2.jpeg";
import Card2 from "/assets/images/R2020/3.jpeg";
import Card3 from "/assets/images/R2020/4.jpeg";
import Card4 from "/assets/images/R2020/5.jpeg";
import Card5 from "/assets/images/R2020/6.jpeg";
import Card6 from "/assets/images/R2020/7.jpeg";
import Card7 from "/assets/images/R2020/8.jpeg";
import Card8 from "/assets/images/R2020/9.jpeg";
import Card9 from "/assets/images/R2020/10.jpeg";
import Card10 from "/assets/images/R2020/11.jpeg";
import Card11 from "/assets/images/R2020/12.jpeg";
import Card12 from "/assets/images/R2020/13.jpeg";
import Card13 from "/assets/images/R2020/14.jpeg";
import Card14 from "/assets/images/R2020/15.jpeg";

import Title from "../../../../components/Title";
import Carrousel from "../Carousel";
import useWindowSize from "../../../../hooks/useWindowSize";
import Carousel2 from "../Carousel2";

const SectionSix = () => {

    const windowSize = useWindowSize();
  
    // Define o número de itens a serem mostrados no Carousel com base no tamanho da tela
    const getVisibleItems = (): number => {
      if (windowSize.width && windowSize.width <= 480) {
        return 1; // Exibe 1 item para telas pequenas (mobile)
      } else if (windowSize.width && windowSize.width <= 768) {
        return 2; // Exibe 2 itens para telas médias (tablets)
      } else {
        return 3; // Exibe 3 itens para telas grandes (desktop)
      }
    };


    const CarouselItems = [
        {src: Card1},
        {src: Card2},
        {src: Card3},
        {src: Card4},
        {src: Card5},
        {src: Card6},
        {src: Card7},
        {src: Card8},
        {src: Card9},
        {src: Card10},
        {src: Card11},
        {src: Card12},
        {src: Card13},
        {src: Card14},
    ]

    return(
        <StyledContainer>
            <TitleH>LABIC Virtual 2020</TitleH>
            <InfoData size="small"
            description="2020 trouxe a pandemia do coronavírus, acarretando mudanças na vida da maioria das pessoas. 
            Foram tempos de ruas desertas, escolas e universidades fechadas, afastamento sanitário. Nosso desafio era 
            produzir um LABIC totalmente virtual. oferecendo respostas - vindas de dentro - a essa crise mundial. 
            Formamos uma equipe de 13 pessoas para atender 40 projetos e gerir 325 colaboradores de todo o Brasil. 
            De 11 de setembro a 11 de dezembro de 2020, produzimos 13 encontros e reunimos projetos, colaboradores 
            e mentores às sextas-feiras, das 14h às 19h, em ambiente virtual. Os encontros foram divididos em conferências, 
            mentorias, oficinas, aconselhamento e consultorias específicas, além de espaços de troca de expertises entre os 
            grupos e projetos, mesmo num ambiente virtual."
            banner={banner}/>   
            <Container2>
                <InfoBlock num="325" info="COLABORADORES"/>
                <InfoBlock num="65H" info="DE TRABALHO"/>
                <InfoBlock num="13" info="ENCONTROS"/>
                <InfoBlock num="40" info="PROJETOS"/>
            </Container2>
            <Container2>
                <EditionButton 
                text="Acesse a chamada pública"
                size="medium"
                url="https://drive.google.com/file/d/11FIpnKhfsPWR9k7be9tiLzLtywLxw63o/view?usp=sharing"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1vLy1N3MOEmyPcVPOuUZeQR_M47YEeFkM/view?usp=sharing"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO DO LABIC VIRTUAL 2020" backgroundColor="#fcfcfc68" color="white"/>
            <Container2>
                {getVisibleItems() === 1 ? (
                    <Carousel2 items={CarouselItems}/>
                ) : (
                    <Carrousel items={CarouselItems}/>
                )}
            </Container2>
            <Container2>
                <EditionButton
                text="Baixe a programação completa em PDF"
                size="large"
                url="https://drive.google.com/file/d/1X1HBXWg9dE1qO5X66qr_3N2jW7NHlKnD/view?usp=sharing"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionSix;