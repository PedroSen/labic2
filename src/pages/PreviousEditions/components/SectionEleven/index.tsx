import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/R2024/1.jpg";
import { TitleH } from "../EditionTitle/style";
import Title from "../../../../components/Title";
import Carrousel from "../Carousel";

import Card1 from "/assets/images/R2024/1.jpg";
import Card2 from "/assets/images/R2024/2.jpg";
import Card3 from "/assets/images/R2024/3.jpg";
import Card4 from "/assets/images/R2024/4.jpg";
import Card5 from "/assets/images/R2024/5.jpg";
import Card6 from "/assets/images/R2024/6.jpg";
import Card7 from "/assets/images/R2024/7.jpg";
import Card8 from "/assets/images/R2024/8.jpg";
import Card9 from "/assets/images/R2024/9.jpg";
import Card10 from "/assets/images/R2024/10.jpg";
import Card11 from "/assets/images/R2024/11.jpg";
import Card12 from "/assets/images/R2024/12.jpg";
import Card13 from "/assets/images/R2024/13.jpg";
import Card14 from "/assets/images/R2024/14.jpg";
import Carousel2 from "../Carousel2";
import useWindowSize from "../../../../hooks/useWindowSize";
import YoutubeButton from "../YoutubeButton";



const SectionEleven = () => {

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
            <TitleH>LABIC RIO 2024</TitleH>
            <InfoData size="medium"
            description="Entre os dias 10 e 13 de outubro de 2024, o Fórum de Ciência e Cultura da UFRJ foi palco de uma experiência transformadora promovida pelo LABIC Brasil 2024. 
            A edição carioca da Rede de Formação em Cultura Digital reuniu especialistas, lideranças e agentes culturais em um ambiente de aprendizado, colaboração e inovação. Com 30 selecionados, 
            a ação destacou o papel fundamental da tecnologia social no fortalecimento da cidadania e da cultura digital. A iniciativa reafirmou o compromisso 
            da Pró-Reitoria de Extensão da UFRJ e do Ministério da Cultura com o fortalecimento da cultura digital como um motor para a cidadania e a inovação."
            banner={banner}/>   
            <Container2>
                <InfoBlock num="30" info="PROJETOS"/>
                <InfoBlock num="12" info="EIXOS-TEMÁTICOS"/>
                <InfoBlock num="13" info="MENTORES"/>
            </Container2>
            <Container2>
                <EditionButton  
                text="Acesse a chamada pública"
                size="medium"
                url="https://drive.google.com/file/d/1WptGzrEspKbfdArugiv8Qi-klIkgXfmA/view?usp=sharing"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1eO2D2Rom_duF0FzTenAgKCsyxzzFbkKw/view?usp=sharing"/>
                <YoutubeButton
                text="Playlist no Youtube"
                size="small"
                url="https://youtube.com/playlist?list=PLs_n0oj-a3rlml6qw3NPuGzWvI0PTuy5g&si=YnOlDGJgWmxkhSMu"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO DA REDE DE FORMAÇÃO EM CULTURA DIGITAL - LABIC RIO 2024" backgroundColor="#fcfcfc68" color="white"/>
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
                text="Acesse programação completa em PDF"
                size="large"
                url="https://drive.google.com/file/d/1cPqwaz7WxZuGWFdsKfJ0IDaO2H_VIG5j/view?usp=sharing"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionEleven;