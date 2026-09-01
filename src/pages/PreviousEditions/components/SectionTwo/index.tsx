import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/R2023/20.jpeg";
import { TitleH } from "../EditionTitle/style";
import Title from "../../../../components/Title";
import Carrousel from "../Carousel";

import Card1 from "/assets/images/R2023/1.jpeg"
import Card2 from "/assets/images/R2023/2.jpeg"
import Card3 from "/assets/images/R2023/3.jpeg"
import Card4 from "/assets/images/R2023/4.jpg"
import Card5 from "/assets/images/R2023/5.jpeg"
import Card6 from "/assets/images/R2023/6.jpeg"
import Card7 from "/assets/images/R2023/7.jpeg"
import Card8 from "/assets/images/R2023/8.jpeg"
import Card9 from "/assets/images/R2023/9.jpeg"
import Card10 from "/assets/images/R2023/10.jpeg"
import Card11 from "/assets/images/R2023/11.jpeg"
import Card12 from "/assets/images/R2023/12.jpeg"
import Card13 from "/assets/images/R2023/13.jpeg"
import Card14 from "/assets/images/R2023/14.jpeg"
import Card15 from "/assets/images/R2023/15.jpeg"
import Card16 from "/assets/images/R2023/16.jpeg"
import Card17 from "/assets/images/R2023/17.jpeg"
import Card18 from "/assets/images/R2023/18.jpeg"
import Card19 from "/assets/images/R2023/19.jpeg"
import Card20 from "/assets/images/R2023/21.jpeg"
import Carousel2 from "../Carousel2";
import useWindowSize from "../../../../hooks/useWindowSize";


const SectionTwo = () => {

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
        {src: Card18},
        {src: Card19},
        {src: Card20},
    ]

    return(
        <StyledContainer>
            <TitleH>LABIC Ações Transformadoras 2023</TitleH>
            <InfoData size="medium"
            description="Em 2023, o Laboratório de Inovação Cidadã - Ações Transformadoras selecionou 25 projetos 
            de todo o estado do Rio de Janeiro. As propostas foram apresentadas por projetos, ações, coletivos, 
            redes e empreendimentos sociais já atuantes, com impacto junto a seu público e com a inovação cidadã, 
            a cidadania e a diversidade em seu horizonte. Cada uma recebeu R$ 5.000,00, totalizando um investimento 
            direto de R$ 125.000,00, oriundos de emendas parlamentares, projetos especiais da UFRJ-Parque Tecnológico, 
            auxílios e agências de fomento. Recursos investidos em ações de inovação, desenvolvimento cultural e tecnológico,
            cidadania, meio ambiente e sustentabilidade e diversidade. "
            banner={banner}/>   
            <Container2>
                <InfoBlock num="25" info="PROJETOS"/>
                <InfoBlock num="5" info="EIXOS-TEMÁTICOS"/>
                <InfoBlock num="20" info="MENTORES"/>
            </Container2>
            <Container2>
                <EditionButton
                text="Acesse a chamada pública"
                size="medium"
                url="https://drive.google.com/file/d/1GbUKhallttYlg14422SHT0v_WZ1QUAfg/view?usp=sharing"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1d3X7S6xcFO60hf70tMGjoCocFMC1Mi2N/view?usp=sharing"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO DO LABIC AÇÕES TRANSFORMADORAS 2023" backgroundColor="#fcfcfc68" color="white"/>
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
                url="https://drive.google.com/file/d/1yoU0ZuFjwwLwBTGJmOIfkqQ3Wkjv3xMj/view?usp=sharing"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionTwo;