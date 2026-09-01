import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/B2024/1.jpeg";
import { TitleH } from "../EditionTitle/style";
import Title from "../../../../components/Title";
import Carrousel from "../Carousel";

import Card1 from "/assets/images/B2024/2.jpeg";
import Card2 from "/assets/images/B2024/3.jpeg";
import Card3 from "/assets/images/B2024/4.jpeg";
import Card4 from "/assets/images/B2024/5.jpeg";
import Card5 from "/assets/images/B2024/6.jpeg";
import Card6 from "/assets/images/B2024/7.jpeg";
import Card7 from "/assets/images/B2024/8.jpeg";
import Card8 from "/assets/images/B2024/9.jpeg";
import Card9 from "/assets/images/B2024/10.jpeg";
import Card10 from "/assets/images/B2024/11.jpeg";
import Card11 from "/assets/images/B2024/12.jpeg";
import Card12 from "/assets/images/B2024/13.jpeg";
import Card13 from "/assets/images/B2024/14.jpeg";
import Card14 from "/assets/images/B2024/15.jpeg";
import Card15 from "/assets/images/B2024/16.jpeg";
import Card16 from "/assets/images/B2024/17.jpeg";
import Card17 from "/assets/images/B2024/18.jpeg";
import Card19 from "/assets/images/B2024/20.jpeg";
import Card20 from "/assets/images/B2024/21.jpeg";
import Card21 from "/assets/images/B2024/22.jpeg";
import Card22 from "/assets/images/B2024/23.jpeg";
import Card23 from "/assets/images/B2024/24.jpeg";
import Card24 from "/assets/images/B2024/25.jpeg";
import Card25 from "/assets/images/B2024/26.jpeg";
import Card26 from "/assets/images/B2024/27.jpeg";
import Card27 from "/assets/images/B2024/28.jpeg";
import Carousel2 from "../Carousel2";
import useWindowSize from "../../../../hooks/useWindowSize";
import YoutubeButton from "../YoutubeButton";



const SectionOne = () => {

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
        {src: Card15},
        {src: Card16},
        {src: Card17},
        {src: Card19},
        {src: Card20},
        {src: Card21},
        {src: Card22},
        {src: Card23},
        {src: Card24},
        {src: Card25},
        {src: Card26},
        {src: Card27},
    ]
    return(
        <StyledContainer>
            <TitleH>LABIC Brasília 2024</TitleH>
            <InfoData size="medium"
            description="Realizada de 2 a 4 de agosto de 2024, o LABIC Brasília 
            ratificou a importância do enfrentamento à cultura do ódio, às fake news, 
            à desinformação, ao fanatismo religioso, ao racismo, à xenofobia, ao preconceito 
            contra pessoas com deficiência. A abertura (1/8) do evento, 'Democracia Hackeada: 
            cultura digital e redes de combate à informação' foi no Memorial Darcy Ribeiro e 
            contou com manifestações inspiradoras de Alexandre de Moraes (STF), em vídeo; 
            Ivana Bentes (UFRJ); Maria Marighella (Funarte); Fabiano Piúba (SEFLI-MinC); 
            Marcio Tavares (MinC); Samara Costa, (Secom), Priscila Almeida (UnB) e 
            Felipe Altenfelder (Mídia Ninja)."
            banner={banner}/>   
            <Container2>
                <InfoBlock num="30" info="PROJETOS"/>
                <InfoBlock num="12" info="EIXOS-TEMÁTICOS"/>
                <InfoBlock num="34" info="MENTORES"/>
            </Container2>
            <Container2>
                <EditionButton  
                text="Acesse a chamada pública"
                size="medium"
                url="https://drive.google.com/file/d/1GiK3hpg733XKhFV0O45b64BuZXH6jmVe/view?usp=sharing"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1hX_VYXaJlzQ7PgxbSiphF-GXvTuitnP8/view?usp=sharing"/>
                <YoutubeButton
                text="Playlist no Youtube"
                size="small"
                url="https://youtube.com/playlist?list=PLs_n0oj-a3rmCOsMnbOo15LcqFRLD1QQ5&si=W816pn0Nmz1k3NxQ"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO DA REDE DE FORMAÇÃO EM CULTURA DIGITAL - LABIC BSB 2024" backgroundColor="#fcfcfc68" color="white"/>
            <Container2>
                {getVisibleItems() === 1 ? (
                    <Carousel2 items={CarouselItems}/>
                ) : (
                    <Carrousel items={CarouselItems}/>
                )}
                {/*<Carrousel items={CarouselItems}/>*/}
                
            </Container2>
            <Container2>
                <EditionButton
                text="Acesse a programação completa em PDF"
                size="large"
                url="https://drive.google.com/file/d/1MU_JaeJ316Tx_kUtiWrGN_b51Ee1CWkg/view?usp=sharing"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionOne;