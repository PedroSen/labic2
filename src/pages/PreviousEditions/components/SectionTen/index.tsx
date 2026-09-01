import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/R2017/2017rj1.jpg";
import { TitleH } from "../EditionTitle/style";

import Card1 from "/assets/images/R2017/2017rj2.jpg";
import Card2 from "/assets/images/R2017/2017rj3.jpg";
import Card3 from "/assets/images/R2017/2017rj4.jpg";
import Card4 from "/assets/images/R2017/2017rj4.jpg";




import Title from "../../../../components/Title";
import Carrousel from "../Carousel";
import useWindowSize from "../../../../hooks/useWindowSize";
import Carousel2 from "../Carousel2";

const SectionTen = () => {

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
    ]

    return(
        <StyledContainer>
            <TitleH>LABIC 2017</TitleH>
            <InfoData size="medium"
            description="O LABIC foi implementado na Escola de Comunicação da UFRJ em 2017. 
            O laboratório incidiu em toda a Região Metropolitana Fluminense. Teve LABIC no Pontão da ECO, 
            na Central de Produção Multimídia da ECO, no Território Inventivo (Centro), na Comunidade da 
            Maré/Redes da Maré, na Rede BOTAFOGO Solidária e na ANF -Agência de Notícias da Favela. 
            Além desses projetos e iniciativas que viraram parceiros, o LABIC contou com a colaboração 
            da Mídia NINJA, do Circuito Fora do Eixo, da Companhia Teatral Língua de Trapo, da Encantamento 
            Filmes e do Projeto Visionárias. Na primeira edição, o LABIC realizou 13 encontros, aos sábados, 
            das 14h às 18h. Para atender 27 projetos, reuniu 50 colaboradores voluntários, mentores e conferencistas, 
            envolvendo diretamente 150 pessoas."
            banner={banner}/>   
            <Container2>
                <InfoBlock num="150" info="PESSOAS"/>
                <InfoBlock num="13" info="ENCONTROS"/>
                <InfoBlock num="27" info="PROJETOS"/>
                <InfoBlock num="50" info="COLABORADORES"/>
            </Container2>
            <Container2>
                <EditionButton  
                text="Acesse a chamada pública"
                size="medium"
                url="https://drive.google.com/file/d/0B2f9fvVBVvAlYjBGSjNpTlVpQ3M/view?usp=sharing&resourcekey=0-EjkKkEhzK8OqMDhm8UmiuA"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1JFw6oRk6DMjrt7ZwyPFFVxJT338DWpM7/view?usp=sharing"/>
            </Container2>
            <Title text=" CONFIRA A PROGRAMAÇÃO DO LABIC 2017" backgroundColor="#fcfcfc68" color="white"/>
            <Container2>
                {getVisibleItems() === 1 ? (
                    <Carousel2 items={CarouselItems}/>
                ) : (
                    <Carrousel items={CarouselItems}/>
                )}
            </Container2>
            
        </StyledContainer>
    )
}

export default SectionTen;