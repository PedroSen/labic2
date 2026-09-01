import { FC } from "react";
import Image from "/assets/images/labic-logo.png";
import EmailIcon from "/assets/icons/email.png";
import {
    StyledFooter,
    StyledLink,
    StyledLogoFigure,
    StyledLogoImage,
    StyledContact,
    StyledTitle,
    StyledEmailLink,
    StyledIcon,
    StyledText,
    StyledNav,
    StyledNavList,
    StyledNavItem,
    StyledNavLink,
    StyledNavIcon,
    StyledLogo,
} from "./style";
import YouTubeIcon from "/assets/icons/youtube.png";
import InstagramIcon from "/assets/icons/instagram.png";
import FacebookIcon from "/assets/icons/facebook.png";

const Footer: FC = () => {
    return (
        <StyledFooter>
            <StyledLogo>
                <StyledLink to={"/"}>
                    <StyledLogoFigure>
                        <StyledLogoImage src={Image} alt="logo" />
                    </StyledLogoFigure>
                </StyledLink>
            </StyledLogo>

            <StyledContact>
                <StyledTitle>Fale com a gente:</StyledTitle>
                <StyledEmailLink
                    //href={"mailto:pontao@eco.ufrj.br"}
                    href={"labicbrasil2024@gmail.com.br"}
                    target={"_blank"}
                >
                    <StyledIcon src={EmailIcon} alt="email" />
                    <StyledText>labicbrasil2024@gmail.com.br</StyledText>
                </StyledEmailLink>
                <StyledNav>
                    <StyledNavList>
                        <StyledNavItem>
                            <StyledNavLink
                                href="https://www.youtube.com/user/pontaodaeco"
                                target="_blank"
                            >
                                <StyledNavIcon
                                    src={YouTubeIcon}
                                    alt="YouTube"
                                />
                            </StyledNavLink>
                        </StyledNavItem>
                        <StyledNavItem>
                            <StyledNavLink
                                href="https://www.instagram.com/pontaodaeco"
                                target="_blank"
                            >
                                <StyledNavIcon
                                    src={InstagramIcon}
                                    alt="Instagram"
                                />
                            </StyledNavLink>
                        </StyledNavItem>
                        <StyledNavItem>
                            <StyledNavLink
                                href="https://www.facebook.com/pontaodaeco"
                                target="_blank"
                            >
                                <StyledNavIcon
                                    src={FacebookIcon}
                                    alt="Facebook"
                                />
                            </StyledNavLink>
                        </StyledNavItem>
                    </StyledNavList>
                </StyledNav>
            </StyledContact>
        </StyledFooter>
    );
};

export default Footer;
