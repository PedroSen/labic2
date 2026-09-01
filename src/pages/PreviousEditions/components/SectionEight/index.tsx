import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/S2019/1.jpg";
import { TitleH } from "../EditionTitle/style";

import Card1 from "/assets/images/S2019/2.jpg";
import Card2 from "/assets/images/S2019/3.jpg";
import Card3 from "/assets/images/S2019/4.jpg";
import Card4 from "/assets/images/S2019/5.jpg";
import Card5 from "/assets/images/S2019/6.jpg";
import Card6 from "/assets/images/S2019/7.jpeg";



import Title from "../../../../components/Title";
import Carrousel from "../Carousel";
import useWindowSize from "../../../../hooks/useWindowSize";
import Carousel2 from "../Carousel2";

const SectionEight = () => {

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
    ]

    return(
        <StyledContainer>
            <TitleH>LABIC SALVADOR 2019</TitleH>
            <InfoData size="small"
            description="Nosso ciclo formativo em fluxo seguiu para a cidade de Salvador (BA) 
            durante o Simpósio Internacional LAVITS: Assimetrias e (In)Visibilidades: Vigilância, 
            Gênero e Raça, ocorrido em junho, na Universidade Federal da Bahia (UFBA). No evento, 
            testamos a aplicação de uma metodologia de ativação de redes em curtíssimo tempo, mapeamos 
            redes parceiras em outros estados, expandindo nossa incidência e relevância. Foram 25 projetos 
            atendidos por 11 mentores e 5 conferencistas que abordaram temas como: redes e narrativas; aplicativos 
            e tecnologias do comum, economia colaborativa, sustentabilidade, gestão e governança; articulação, mobilização, 
            mídia e ativismo; produção audiovisual; dados e algoritmos; dados e narrativas; construção de narrativas para 
            projetos e apresentações; ferramentas de gestão de projetos; além das mentorias de redes sociais, design e 
            construção de aplicativos."
            banner={banner}/>   
            <Container2>
                <InfoBlock num="5" info="CONFERÊNCIAS"/>
                <InfoBlock num="11" info="MENTORIAS"/>
                <InfoBlock num="25" info="PROJETOS"/>
            </Container2>
            <Container2>
                <EditionButton 
                text="Acesse a chamada pública"
                size="medium"
                url="https://drive.google.com/file/d/1vuw-88414-nHK5X6L4s0NIeSBS8YIRX0/view?usp=sharing"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1vDC5tU4A1RAB5CnTuH-bSoQSXCRZpkkL/view?usp=sharing"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO COMPLETA DO LABIC SALVADOR 2019" backgroundColor="#fcfcfc68" color="white"/>
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
                url="https://drive.google.com/file/d/1XprMhjzHGi4VTwzKCBI6a1MYF6qCWx2_/view?usp=sharing"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionEight;