import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "/assets/images/R2018/2018rj1.jpg";
import { TitleH } from "../EditionTitle/style";

import Card1 from "/assets/images/R2018/2018rj2.jpg";
import Card2 from "/assets/images/R2018/2018rj3.jpg";
import Card3 from "/assets/images/R2018/2018rj4.jpg";



import Title from "../../../../components/Title";
import Carrousel from "../Carousel";
import useWindowSize from "../../../../hooks/useWindowSize";
import Carousel2 from "../Carousel2";

const SectionNine = () => {

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
    ]

    return(
        <StyledContainer>
            <TitleH>LABIC RIO 2018</TitleH>
            <InfoData size="small"
            description="Em 2018, o LABIC foi desafiado a alcançar voos mais amplos. 
            Com apoio da UFRJ, renovamos e consolidamos o projeto e suas atividades, 
            que já eram referência em cultura digital e ambiente cognitivo de diversidade, 
            produção e partilha de saberes e cosmovisões plurais. A segunda edição do LABIC 
            reuniu lideranças e gestores de projetos, pesquisadores, mentores e colaboradores 
            entre os meses de setembro e dezembro de 2018, no Rio de Janeiro, conectando pessoas 
            interessadas no intercâmbio de ideias e práticas pioneiras e inovadoras da economia criativa. 
            Vinte projetos participaram dessa edição e tiveram a oportunidade de desenvolver suas propostas, 
            compartilhar experiências, mapear as melhorias necessárias e planejar seus próximos passos. 
            Para isso, 58 colaboradores se uniram aos projetos, contribuindo para seu desenvolvimento e sustentabilidade em rede."
            banner={banner}/>   
            <Container2>
                <InfoBlock num="10" info="ENCONTROS"/>
                <InfoBlock num="20" info="PROJETOS"/>
                <InfoBlock num="100" info="PARTICIPANTES"/>
            </Container2>
            <Container2>
                <EditionButton 
                text="Acesse a chamada pública"
                size="medium"
                url="https://drive.google.com/file/d/1hy1XBaHMsQ7IIQXBZtZ8JHlPkARfAwb_/view?usp=sharing"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1HQRKF3xN22uz8hTMIOcFrIKTi1GFCi_-/view?usp=sharing"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO COMPLETA DO LABIC RJ 2018" backgroundColor="#fcfcfc68" color="white"/>
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
                url="https://drive.google.com/file/d/1N5XTfbD56oVmbvaruPWTsVdFwa9kwN92/view?usp=sharing"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionNine;