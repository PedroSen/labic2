import BackgroundImages from "../../../../components/BackgroundImages";
import {
    StyledSectionThree,
    StyledText,
    StyledContent,
    StyledFigure,
    StyledImage,
    StyledImg,
} from "./style";
import Labic from "/assets/images/labic.jpeg";

const sectionThree = () => {
    return (
        <StyledSectionThree>
            <BackgroundImages page="TheProject" section="Three" />
            <StyledText>
                <StyledContent>
                    A iniciativa é realizada pelo Laboratório de Inovação da
                    UFRJ e coordenado pela professora Ivana Bentes desde 2017. O
                    Labic já foi realizado no Rio de Janeiro (2017, 2018, 2019),
                    em Salvador/BA (2019) e Lisboa/PT (2019) e, em 2024, chega a
                    Brasília, novamente ao Rio e a Curitiba. Desde 2020,
                    realizamos edições virtuais e híbridas.
                </StyledContent>
            </StyledText>
            <StyledFigure>
                <StyledImage>
                    <StyledImg src={Labic} />
                </StyledImage>
            </StyledFigure>
        </StyledSectionThree>
    );
};

export default sectionThree;
