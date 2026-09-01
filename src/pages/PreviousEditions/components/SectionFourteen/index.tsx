import {Container2, StyledContainer } from "./style";
import InfoData from "../InfoData";
import InfoBlock from "../InfoBlock";
import EditionButton from "../EditionButton";
import banner from "../../../../../public/assets/images/A2025/6.png";
import { TitleH } from "../EditionTitle/style";
import Title from "../../../../components/Title";
import Carrousel from "../Carousel";

import Card1 from "../../../../../public/assets/images/A2025/1.png";
import Card2 from "../../../../../public/assets/images/A2025/2.png";
import Card3 from "../../../../../public/assets/images/A2025/3.png";
import Card4 from "../../../../../public/assets/images/A2025/4.png";
import Card5 from "../../../../../public/assets/images/A2025/5.png";
import Card6 from "../../../../../public/assets/images/A2025/6.png";
import Card7 from "../../../../../public/assets/images/A2025/7.png";
import Card8 from "../../../../../public/assets/images/A2025/8.png";
import Card9 from "../../../../../public/assets/images/A2025/9.png";
import Card10 from "../../../../../public/assets/images/A2025/10.png";
import Card11 from "../../../../../public/assets/images/A2025/11.png";
import Card12 from "../../../../../public/assets/images/A2025/12.png";
import Card13 from "../../../../../public/assets/images/A2025/13.png";
import Card14 from "../../../../../public/assets/images/A2025/14.png";
import Card15 from "../../../../../public/assets/images/A2025/15.png";
import Card16 from "../../../../../public/assets/images/A2025/16.png";
import Card17 from "../../../../../public/assets/images/A2025/17.png";
import Card18 from "../../../../../public/assets/images/A2025/18.png";
import Card19 from "../../../../../public/assets/images/A2025/19.png";
import Card20 from "../../../../../public/assets/images/A2025/20.png";
import Card21 from "../../../../../public/assets/images/A2025/21.jpeg";
import Card22 from "../../../../../public/assets/images/A2025/22.png";
import Card23 from "../../../../../public/assets/images/A2025/23.png";
import Carousel2 from "../Carousel2";
import useWindowSize from "../../../../hooks/useWindowSize";
import YoutubeButton from "../YoutubeButton";



const SectionFourteen = () => {

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
        {src: Card21},
        {src: Card22},
        {src: Card23}
    ]
    return(
        <StyledContainer>
            <TitleH>LABIC AMAZONAS 2026</TitleH>
            <InfoData size="medium"
            description="A rede de formação em cultura digital LABIC Amazonas iniciou o ano de 2026 
            com uma travessia pelo Alto Rio Negro rumo à “Capital Indígena”, São Gabriel da Cachoeira (AM). 
            Entre os dias 26 e 31 de janeiro, ocorreu uma imersão prévia nas comunidades de Assunção do Içana, 
            Ambaúba, Buia Igarapé, Aldeia de Nazaré e Escola Viva, proporcionando uma vivência direta com a cultura e os costumes dos povos originários.
            Em seguida, a programação avançou para uma segunda etapa, realizada entre os dias 4 e 7 de fevereiro. 
            Essa fase foi dedicada exclusivamente à formação em cultura digital voltada a 30 projetos indígenas de diversas etnias. 
            Durante os encontros, foram promovidas oficinas e mentorias sobre diversos temas, como culturas digitais, 
            tecnologias sociais, comunicação comunitária, uso de inteligência artificial, fake news, artes indígenas e negócios socioambientais. 
            Além disso, a formação incluiu imersões na Casa Wariró e na Casa de Pimenta Baniwa, que possibilitaram um aprendizado prático sobre os 
            modos de vida e saberes amazônicos."
            banner={banner}/>   
            <Container2>
                <InfoBlock num="30" info="PROJETOS"/>
                <InfoBlock num="12" info="EIXOS-TEMÁTICOS"/>
                <InfoBlock num="30" info="MENTORES"/>
            </Container2>
            <Container2>
                <EditionButton  
                text="Acesse a chamada pública"
                size="small"
                url="https://drive.google.com/file/d/1_7ZZz3Wze1rC-2H2hWvhdyRgva4YcjPw/view?usp=drivesdk"/>
                <EditionButton
                text ="Projetos Selecionados"
                size="small"
                url="https://drive.google.com/file/d/1GYkT3jHXGAT8ALBZUkISnpd_eqyi4eHt/view?usp=drivesdk"/>
                <YoutubeButton
                text="Playlist no Youtube"
                size="small"
                url="https://www.youtube.com/watch?v=EjpwBe70m-Y&list=PLs_n0oj-a3rnh6jY0q2UImnH7m_y2V7rk"/>
            </Container2>
            <Title text="CONFIRA A PROGRAMAÇÃO DA REDE DE FORMAÇÃO EM CULTURA DIGITAL - LABIC AMAZONAS 2026" backgroundColor="#fcfcfc68" color="white"/>
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
                url="https://mcusercontent.com/49915ace06aee87b69e0607af/files/e722d5f2-6899-ae1e-e2f4-37cccb3ace03/PDF_Programa_ccedil_atilde_o_Horario_de_Brasilia_2_.pdf"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionFourteen;