import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/R2019/1.jpeg";
import { TitleH } from "../EditionTitle/style";

import Card1 from "/assets/images/R2019/2.jpeg";
import Card2 from "/assets/images/R2019/3.jpeg";
import Card3 from "/assets/images/R2019/4.jpeg";
import Card4 from "/assets/images/R2019/5.jpeg";
import Card5 from "/assets/images/R2019/6.jpeg";
import Card6 from "/assets/images/R2019/7.jpeg";
import Card7 from "/assets/images/R2019/8.jpeg";


import Title from "../../../../components/Title";
import Carrousel from "../Carousel";
import useWindowSize from "../../../../hooks/useWindowSize";
import Carousel2 from "../Carousel2";

const SectionSeven = () => {

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
    ]

    return(
        <StyledContainer>
            <TitleH>LABIC RIO 2019</TitleH>
            <InfoData size="small"
            description="A terceira edição do Labic reuniu lideranças e gestores de projetos, artistas, pesquisadores, 
            mentores, realizadores, produtores e colaboradores entre os meses de setembro e dezembro de 2019 no Rio de Janeiro. 
            O projeto conectou tecnologias apreendidas pela equipe ao longo do ano com iniciativas inventivas e potentes de campos
            como cultura, meio ambiente, negócios sociais, periferia, mídia e ativismo, ciência aberta etc. 
            Nos encontros, para além de apresentações sobre cases e metodologias de trabalhos voltados aos campos dos 
            novos jornalismos (de dados, investigativos, de gênero, raça etc.) e da ciência de dados (campanhas políticas, 
            cultura algorítmica preemptiva e preditiva, memética, fakes e bots), foram confabuladas uma série de táticas e 
            metodologias passíveis de apropriação pelos grupos."
            banner={banner}/>   
            <Container2>
                <InfoBlock num="70" info="COLABORADORES"/>
                <InfoBlock num="26" info="PROJETOS"/>
                <InfoBlock num="5" info="CONFERENCISTAS"/>
                <InfoBlock num="11" info="MENTORES"/>
            </Container2>
            <Container2>
                <EditionButton 
                text="Acesse a chamada pública"
                size="medium"
                url="https://drive.google.com/file/d/1fOl1pHDXnydwxrJcr1UHMz95p9fhfFPQ/view?usp=sharing"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1RnO-Rv4jK9qHsMgsHkGrqDEG9nzTTExS/view?usp=sharing"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO COMPLETA DO LABIC RIO 2019" backgroundColor="#fcfcfc68" color="white"/>
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
                url="https://drive.google.com/file/d/1uD0Rhw9uLk4baM7ypiwdtIlnhHWYmC4J/view?usp=sharing"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionSeven;