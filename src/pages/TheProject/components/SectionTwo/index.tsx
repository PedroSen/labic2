import {
    StyledSectionTwo,
    StyledInovation,
    StyledText,
    StyledTitle,
    StyledItalic,
    StyledContent,
    StyledImage,
} from "./style";
import Numbers from "../MagicNumbers";
import BackgroundImages from "../../../../components/BackgroundImages";

const SectionTwo = () => {
    return (
        <StyledSectionTwo>
            <StyledInovation>
                <StyledText>
                    <BackgroundImages page="TheProject" section="Two" />
                    <StyledTitle>
                        <StyledItalic>Match</StyledItalic> da INOVAÇÃO
                    </StyledTitle>
                    <StyledContent>
                        Chamamos de “Match da Inovação” porque aproxima projetos
                        e experiências da cidade com quem pode ajudar a
                        concretizá-los ou melhorá-los.
                    </StyledContent>
                </StyledText>

                <StyledImage />
            </StyledInovation>
            <Numbers />
        </StyledSectionTwo>
    );
};

export default SectionTwo;
