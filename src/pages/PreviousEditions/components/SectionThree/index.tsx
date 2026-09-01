import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/R2022/1.jpg";
import { TitleH } from "../EditionTitle/style";

import Card2 from "/assets/images/R2022/2.jpeg";
import Card3 from "/assets/images/R2022/3.jpeg";
import Card4 from "/assets/images/R2022/4.jpeg";
import Card5 from "/assets/images/R2022/5.jpg";
import Card6 from "/assets/images/R2022/6.jpeg";
import Card7 from "/assets/images/R2022/7.jpeg";
import Card8 from "/assets/images/R2022/8.jpg";
import Card9 from "/assets/images/R2022/9.jpeg";
import Card10 from "/assets/images/R2022/10.jpeg";
import Card11 from "/assets/images/R2022/11.jpeg";
import Card12 from "/assets/images/R2022/12.jpeg";
import Card13 from "/assets/images/R2022/13.jpeg";
import Card14 from "/assets/images/R2022/14.jpeg";
import Card15 from "/assets/images/R2022/15.jpeg";
import Card16 from "/assets/images/R2022/16.jpeg";
import Card17 from "/assets/images/R2022/17.jpeg";
import Card18 from "/assets/images/R2022/18.jpeg";
import Title from "../../../../components/Title";
import Carrousel from "../Carousel";
import useWindowSize from "../../../../hooks/useWindowSize";
import Carousel2 from "../Carousel2";

const SectionThree = () => {

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
        {src: Card15},
        {src: Card16},
        {src: Card17},
        {src: Card18},
    ]

    return(
        <StyledContainer>
            <TitleH>LABIC FAVELA E UNIVERSIDADE 2022</TitleH>
            <InfoData size="large"
            description="De volta às atividades presenciais, o Laboratório de Inovação Cidadã voltou ao presencial, 
            seguindo os protocolos de segurança recomendados pelo comitê de combate ao coronavírus da UFRJ. O Labic Favela 
            e Universidade teve como objetivo apoiar ações de coletivos e organizações de todo o estado do Rio de Janeiro 
            com ações em 6 Eixos: Ações de Enfrentamento a Covid-19; Mídias e Diversidade; Tecnologias, Redes, Dados e Plataformas; 
            Ações Culturais; Formação Livre; Economia e Cidadania. "
            banner={banner}/>   
            <Container2>
                <InfoBlock num="40" info="PROJETOS"/>
                <InfoBlock num="6" info="EIXOS-TEMÁTICOS"/>
                <InfoBlock num="24" info="MENTORES"/>
            </Container2>
            <Container2>
                <EditionButton 
                text="Acesse a chamada pública"
                size="medium"
                url="https://drive.google.com/file/d/1Cgp9AYALH_Fb8-F8A_CFP5YyroGnkKQw/view?usp=sharing"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1ZO2TsBEEi0ExeXPSM_gID4BpAPi-O_FX/view?usp=sharing"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO FAVELA E UNIVERSIDADE LABIC 2022" backgroundColor="#fcfcfc68" color="white"/>
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
                url="https://drive.google.com/file/d/1yfNfXh9kScIJyZv8UYi9qlQM3tS_-D16/view?usp=sharing"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionThree;