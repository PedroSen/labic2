import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/R2021_2/1.jpeg";
import { TitleH } from "../EditionTitle/style";

import Card1 from "/assets/images/R2021_2/1.jpeg";
import Card2 from "/assets/images/R2021_2/2.jpeg";
import Card3 from "/assets/images/R2021_2/3.jpeg";
import Card4 from "/assets/images/R2021_2/4.jpeg";
import Card5 from "/assets/images/R2021_2/5.jpeg";
import Card6 from "/assets/images/R2021_2/6.jpeg";
import Card7 from "/assets/images/R2021_2/7.jpeg";
import Card8 from "/assets/images/R2021_2/8.jpeg";
import Card9 from "/assets/images/R2021_2/9.jpeg";

import Title from "../../../../components/Title";
import Carrousel from "../Carousel";
import useWindowSize from "../../../../hooks/useWindowSize";
import Carousel2 from "../Carousel2";

const SectionFour = () => {

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
    ]

    return(
        <StyledContainer>
            <TitleH>Monitoria LABIC 2021.2</TitleH>
            <InfoData size="small"
            description="Após 5 anos, 7 edições e mais de 180 projetos atendidos, 
            o Laboratório de Inovação Cidadã abriu uma chamada para saber como estavam 
            as iniciativas que fizeram parte do LABIC UFRJ. Quinze desses projetos, 
            pelo menos um de cada edição, retornaram e tiveram a oportunidade de participar de novos encontros, 
            criar novas redes e encontrar novas parcerias e apoios. Durante oito encontros, 
            foram realizadas mentorias específicas para cada um dos selecionados. 
            Trocamos conhecimento em diversas áreas, como design e comunicação visual; 
            criação e envio de newsletter; elaboração de projetos e captação de recursos; 
            gestão de mídias e redes sociais; operação de plataformas de streaming e transmissão ao vivo; 
            e narrativas. Todo esse material está disponível no Youtube do Pontão através do LABIC Sob Demanda, 
            que reúne conversas com nossos mentores e mentorias práticas em uma só playlist! "
            banner={banner}/>   
            <Container2>
                <InfoBlock num="15" info="PROJETOS"/>
                <InfoBlock num="8" info="MENTORES"/>
            </Container2>
            <Container2>
                <EditionButton 
                text="Acesse a chamada pública"
                size="medium"
                url="https://drive.google.com/file/d/1eLt25u7MLNrzVXOVvzutljgwlSE45-_I/view?usp=sharing"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1yT6lf60wwKfLnav7fg6ivNOl5730av6j/view?usp=sharing"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO DO MONITORA LABIC 2021.2" backgroundColor="#fcfcfc68" color="white"/>
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
                url="https://drive.google.com/file/d/1aq0A7lDQ7uUIZENbbFuppY_aGCESFU8r/view?usp=sharing"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionFour;