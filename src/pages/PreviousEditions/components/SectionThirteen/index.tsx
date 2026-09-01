import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/F2025/card7.png";
import { TitleH } from "../EditionTitle/style";
import Title from "../../../../components/Title";
import Carrousel from "../Carousel";

import Card1 from "/assets/images/F2025/card1.png";
import Card2 from "/assets/images/F2025/card2.png";
import Card3 from "/assets/images/F2025/card3.png";
import Card4 from "/assets/images/F2025/card4.png";
import Card5 from "/assets/images/F2025/card5.png";
import Card6 from "/assets/images/F2025/card6.png";
import Card7 from "/assets/images/F2025/card7.png";
import Card8 from "/assets/images/F2025/card8.png";
import Card9 from "/assets/images/F2025/card9.png";
import Carousel2 from "../Carousel2";
import useWindowSize from "../../../../hooks/useWindowSize";
import YoutubeButton from "../YoutubeButton";



const SectionThirteen = () => {

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
            <TitleH>LABIC FORTALEZA 2025</TitleH>
            <InfoData size="medium"
            description="Entre os dias 18 e 21 de setembro de 2025, Fortaleza recebeu a Rede de Formação em Cultura Digital. 
            O evento teve início com uma cerimônia na Pinacoteca do Ceará, reunindo agentes culturais, lideranças e especialistas em inovação cidadã. 
            Foram 29 projetos selecionados para participar de oficinas temáticas e mentorias especializadas. A programação abordou temas 
            cruciais, como a aplicação de tecnologias digitais na cultura cidadã e o combate à desinformação, promovendo o fortalecimento 
            da cultura digital e da cidadania no Brasil."
            banner={banner}/>   
            <Container2>
                <InfoBlock num="29" info="PROJETOS"/>
                <InfoBlock num="12" info="EIXOS-TEMÁTICOS"/>
                <InfoBlock num="19" info="MENTORES"/>
            </Container2>
            <Container2>
                <EditionButton  
                text="Acesse a chamada pública"
                size="small"
                url="https://drive.google.com/file/d/10GbtDxFsT-hzfDNrHQ9qm-seTiM23gKE/view?usp=drivesdk"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1TDpCXRZRIdBi4IulSRglJU3GmLSatG6h/view"/>
                <YoutubeButton
                text="Playlist no Youtube"
                size="small"
                url="https://www.youtube.com/embed/MpB-VX9KyCs?si=VfLZgrefJW9enjGz"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO DA REDE DE FORMAÇÃO EM CULTURA DIGITAL - LABIC FORTALEZA 2025" backgroundColor="#fcfcfc68" color="white"/>
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
                url="https://drive.google.com/file/d/12XMUUlhd4lGs4gDV5qAzhUpsBY-u3g0N/view?usp=drivesdk"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionThirteen;