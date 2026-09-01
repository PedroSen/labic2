import BackgroundImages from "../../../../components/BackgroundImages";
import {
    StyledSectionSix,
    StyledText,
    StyledTitle,
    StyledContent,
} from "./style";
//import WorldImage from "/assets/images/labic-pelo-mundo.png";

const SectionSix = () => {
    return (
        <StyledSectionSix>
            <BackgroundImages page="TheProject" section="Six" />
            <StyledText>
                <StyledTitle>Laboratórios no mundo</StyledTitle>
                <StyledContent>
                    O Laboratório de Inovação Cidadã é um projeto da
                    Secretaria-Geral Ibero-americana que tem como objetivo
                    promover a inovação cidadã a fim de fomentar a transformação
                    social, a governança democrática, e o desenvolvimento
                    social, cultural e econômico. Inovação Cidadã é um processo
                    que resolve problemas sociais com tecnologias (digitais,
                    sociais, ancestrais) e metodologias inovadoras, através do
                    envolvimento da própria comunidade afetada. Com isso, os
                    cidadãos deixam de ser receptores passivos de ações
                    institucionais e se convertem em protagonistas e produtores
                    de suas próprias soluções.
                </StyledContent>
            </StyledText>
        </StyledSectionSix>
    );
};

export default SectionSix;
