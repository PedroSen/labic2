import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/C2024/1.png";
import { TitleH } from "../EditionTitle/style";
import Title from "../../../../components/Title";
import Carrousel from "../Carousel";

import Card1 from "/assets/images/C2024/1.png";
import Card2 from "/assets/images/C2024/2.png";
import Card3 from "/assets/images/C2024/3.png";
import Card4 from "/assets/images/C2024/4.png";
import Card5 from "/assets/images/C2024/5.png";
import Card6 from "/assets/images/C2024/6.png";
import Card7 from "/assets/images/C2024/7.png";
import Card8 from "/assets/images/C2024/8.png";
import Card9 from "/assets/images/C2024/9.png";
import Card10 from "/assets/images/C2024/10.png";
import Card11 from "/assets/images/C2024/11.png";
import Card12 from "/assets/images/C2024/12.png";
import Card13 from "/assets/images/C2024/13.png";
import Card14 from "/assets/images/C2024/14.png";
import Carousel2 from "../Carousel2";
import useWindowSize from "../../../../hooks/useWindowSize";
import YoutubeButton from "../YoutubeButton";



const SectionTwelve = () => {

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
            <TitleH>LABIC CURITIBA 2024</TitleH>
            <InfoData size="medium"
            description="Entre os dias 13 e 16 de novembro de 2024, Curitiba recebeu a Rede de Formação em Cultura Digital. 
            O evento teve início com uma cerimônia no Auditório Teatro Anfi100, na Reitoria da Universidade Federal do Paraná (UFPR), 
            e continuou com imersões práticas no Espaço Itupava, reunindo agentes culturais, lideranças e especialistas em inovação cidadã. 
            Foram 30 projetos selecionados para participar de oficinas temáticas e mentorias especializadas. A programação abordou temas 
            cruciais, como a aplicação de tecnologias digitais na cultura cidadã e o combate à desinformação, promovendo o fortalecimento 
            da cultura digital e da cidadania no Brasil."
            banner={banner}/>   
            <Container2>
                <InfoBlock num="30" info="PROJETOS"/>
                <InfoBlock num="12" info="EIXOS-TEMÁTICOS"/>
                <InfoBlock num="12" info="MENTORES"/>
            </Container2>
            <Container2>
                <EditionButton  
                text="Acesse a chamada pública"
                size="small"
                url="https://drive.google.com/file/d/1W6FosVeAv60eu4SkEV-e7rtZMHwmrzFB/view?usp=sharing"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1r8BD57mJCNDQQH3W2EFvP0ra6ou0DsKQ/view?usp=sharing"/>
                <YoutubeButton
                text="Playlist no Youtube"
                size="small"
                url="https://youtube.com/playlist?list=PLs_n0oj-a3rk0LsZzrkgRBgJYYksuBDq9&si=LnWu2Nt7MgDXZgYe"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO DA REDE DE FORMAÇÃO EM CULTURA DIGITAL - LABIC CURITIBA 2024" backgroundColor="#fcfcfc68" color="white"/>
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
                url="https://drive.google.com/file/d/1F0xV-nRt5fIZqaiCWOq8QPInzpW3Z5Q0/view?usp=sharing"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionTwelve;