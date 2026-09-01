import {
    StyledExperiences,
    StyledContent,
    StyledText,
    StyledTitle,
    StyledSectionOne,
    StyledVideo,
} from "./style";
import Video from "/assets/videos/labic-video.mp4";
import Cards from "../IconCards";
import BackgroundImages from "../../../../components/BackgroundImages";

const SectionOne = () => {
    return (
        <StyledSectionOne>
            <BackgroundImages page={"TheProject"} section={"One"} />

            <StyledExperiences>
                <StyledText>
                    <StyledTitle>
                        O Laboratório de Inovação Cidadã da UFRJ é uma rede de
                        ações, pesquisa e formação com objetivo de mapear e
                        sistematizar experiências de referência em tecnologias
                        sociais e inovação no estado do Rio de Janeiro.
                    </StyledTitle>
                    <StyledContent>
                        São espaços criados para desenvolver, apoiar e acelerar
                        propostas que surgem e têm potencial para serem
                        replicadas ou ativar outras iniciativas.
                    </StyledContent>
                </StyledText>
                <StyledVideo autoPlay={true} muted={true} loop={true}>
                    <source src={Video} type="video/mp4" />
                    Seu navegador não suporta este vídeo.
                </StyledVideo>
            </StyledExperiences>
            <Cards />
        </StyledSectionOne>
    );
};

export default SectionOne;
