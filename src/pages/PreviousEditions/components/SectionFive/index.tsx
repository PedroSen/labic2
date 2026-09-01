import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/R2021_1/1.jpeg";
import { TitleH } from "../EditionTitle/style";

import Card1 from "/assets/images/R2021_1/2.jpeg";
import Card2 from "/assets/images/R2021_1/3.jpeg";
import Card3 from "/assets/images/R2021_1/4.jpeg";
import Card4 from "/assets/images/R2021_1/5.jpeg";
import Card5 from "/assets/images/R2021_1/6.jpeg";
import Card6 from "/assets/images/R2021_1/7.jpeg";
import Card7 from "/assets/images/R2021_1/8.jpeg";
import Card8 from "/assets/images/R2021_1/9.jpeg";
import Card9 from "/assets/images/R2021_1/10.jpeg";
import Card10 from "/assets/images/R2021_1/11.jpeg";
import Card11 from "/assets/images/R2021_1/12.jpeg";
import Card12 from "/assets/images/R2021_1/13.jpeg";
import Card13 from "/assets/images/R2021_1/14.jpeg";
import Card14 from "/assets/images/R2021_1/15.jpeg";
import Card15 from "/assets/images/R2021_1/16.jpeg";
import Card16 from "/assets/images/R2021_1/17.jpeg";
import Card17 from "/assets/images/R2021_1/18.jpeg";
import Card18 from "/assets/images/R2021_1/19.jpeg";
import Card19 from "/assets/images/R2021_1/20.jpeg";

import Title from "../../../../components/Title";
import Carrousel from "../Carousel";
import useWindowSize from "../../../../hooks/useWindowSize";
import Carousel2 from "../Carousel2";

const SectionFive = () => {

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
    ]

    return(
        <StyledContainer>
            <TitleH>LABIC Territórios 2021.1</TitleH>
            <InfoData size="medium"
            description="A urgência de vida trazida pela pandemia, sentida de forma ainda mais profunda nas periferias, 
            nos fez testemunhar que as respostas mais inovadoras de enfrentamento à Covid-19 e suas consequências foram 
            desenvolvidas justamente nesses territórios. O LABIC Territórios, realizado no primeiro semestre de 2021, 
            olhou para essas iniciativas, buscou intensificar a troca de experiências entre realizadores, possibilitou a 
            colaboração de universitários, especialistas, professores, consultores, gestores, numa verdadeira profusão de 
            troca de conhecimentos, saberes, tecnologias, metodologias, criatividade e inovação. O LABIC Territórios teve 
            apoio do Pontão de Cultura Digital da Escola de Comunicação da UFRJ, da Pró-Reitoria de Extensão da UFRJ, da 
            Fundação Universitária José Bonifácio, da FAPERJ e do CNPq."
            banner={banner}/>   
            <Container2>
                <InfoBlock num="17" info="PARTICIPAÇÕES ESPECIAIS"/>
                <InfoBlock num="12" info="ENCONTROS"/>
                <InfoBlock num="9" info="PODCASTS"/>
                <InfoBlock num="40" info="PROJETOS"/>
            </Container2>
            <Container2>
                <EditionButton 
                text="Acesse a chamada pública"
                size="medium"
                url="https://drive.google.com/file/d/1eMViQItbiVUtGUR8R7TTxtdO0oJ84H5I/view?usp=sharing"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1j71TcrkIOoMRCBYmWGZ_G68cLs48r7Ao/view?usp=sharing"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO DO LABIC TERRITÓRIOS 2021.1" backgroundColor="#fcfcfc68" color="white"/>
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
                url="https://drive.google.com/file/d/1w3wTwFR9CROEHDk1_imL0BrCqHzOJrdI/view?usp=sharing"/>
            </Container2>
            <Container2>
            </Container2>
        </StyledContainer>
    )
}

export default SectionFive;