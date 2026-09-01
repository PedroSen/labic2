import {
    StyledSectionFour,
    StyledSupport,
    StyledIcon,
    StyledText,
    StyledContent,
    StyledBold,
    StyledLogos,
    StyledImage,
} from "./style.ts";
import SupportIcon from "/assets/icons/support-round.png";
import FaperjLogo from "/assets/images/faperj-logo.png";
import CnpqLogo from "/assets/images/cnpq-logo.png";

const SectionFour = () => {
    return (
        <StyledSectionFour>
            <StyledSupport>
                <StyledIcon src={SupportIcon} alt={"Ícone de suporte"} />
                <StyledText>
                    <StyledContent>
                        O Laboratório de Inovação Cidadã conta com o apoio da{" "}
                        <StyledBold>FAPERJ</StyledBold>, através da{" "}
                        <StyledBold>Bolsa Cientista do Nosso Estado</StyledBold>
                        , e do <StyledBold>CNPQ</StyledBold>.
                    </StyledContent>
                </StyledText>
            </StyledSupport>
            <StyledLogos>
                <StyledImage src={FaperjLogo} alt={"Logo da Faperj"} />
                <StyledImage src={CnpqLogo} alt={"Logo do CNPQ"} />
            </StyledLogos>
        </StyledSectionFour>
    );
};

export default SectionFour;
