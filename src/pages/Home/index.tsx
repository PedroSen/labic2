import {
    StyledContainer,
    StyledBannerContainer,
    StyledBannerFigure,
    StyledBannerImage,
    StyledLinksContainer,
    //StyledNav,
    //StyledNavList,
    //StyledNavItem,
    //StyledNavLink,
    //StyledNavIcon,
    StyledBannerAux,
    //StyledBannerLi,
    StyledBannerUl,
    StyledBannerLink,
    StyledBannerText,
    StyledBannerText2,
    StyledBannerTextContainer,
    //StyledLiveBox,
    StyledImage,
    StyledFigure,
} from "./style";
import LabicBanner from "../../../public/assets/images/LABIC_BRASIL/LOGO_BIOMAS.png";
//import YouTubeIcon from "/assets/icons/youtube.png";
//import FacebookIcon from "/assets/icons/facebook.png";
//import LiveIcon from "/assets/icons/live.png";
//import InstagramIcon from "/assets/icons/instagram.png";
//import useWindowSize from "../../hooks/useWindowSize.tsx";
//import { Link } from "react-router-dom";
import { FC, useEffect, useState} from "react";
//import Button from "../../components/Button";
import ArrowDownImage from "/assets/images/arrow-down.gif";

interface NavItems {
    name: string;
    path: string;
}

const Home: FC = () => {
    //const size = useWindowSize();

    {/*const getFontSize = (button: number): string => {
        if (button === 1) {
            if (size.width && size.width < 540) return "1rem";
            return "1.5rem";
        }

        if (button == 2) {
            if (size.width && size.width < 540) return "0.7rem";
            return "1.2rem";
        }

        return "";
    };*/}

    const navItems: NavItems[] = [
        { name: "CHAMADA PÚBLICA", path: "https://docs.google.com/document/d/1Wclx30ZFLCvFYj9901GVeDDZvFEPwMztME08wGuoqS8/edit?usp=sharing" },
        { name: "INSCRIÇÕES DE PROJETOS", path: "https://docs.google.com/forms/d/e/1FAIpQLSfWYHgNXmfvbXrZxzNKAl1DgOOVD-xW4J-WiauRkf0XxzBzJA/viewform" },
        { name: "INSCRIÇÕES CURSO DE EXTENSÃO E COLABORADORES", path: "https://docs.google.com/forms/d/e/1FAIpQLSfaGWR2U_02WYzDSulAovAqQV8oJrNzBVndmAqDyywQAVfKfA/viewform" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [isOpen]);

    return (
        <StyledContainer>
            <StyledBannerContainer>
                <StyledBannerFigure>
                    <StyledBannerImage src={LabicBanner} alt="Banner" />
                </StyledBannerFigure>
                <StyledBannerTextContainer>
                    <StyledBannerText>
                        A Rede de Formação em Cultura Digital – Labic Maricá está com inscrições abertas até o dia 28 de outubro!
                    </StyledBannerText>
                    <StyledBannerText2>
                        Se você lidera ou integra projetos, coletivos, cooperativas ou organizações sociais, inscreva sua iniciativa e conecte-se a uma rede focada em transformar a cultura digital no Brasil. 
                    </StyledBannerText2>
                </StyledBannerTextContainer>
                {/*<Button
                    text={{
                        value: "RESULTADO",
                        fontSize: getFontSize(1) || "1.5rem",
                        fontWeight: 600,
                        color: "#000000",
                    }}
                    disabled={false}
                    backgroundColor={"#FFFFFF"}
                    url={
                        "https://drive.google.com/file/d/1YPJiDXJO0mNgKOPkjhpW6QrfE5E7vQa_/view?usp=drivesdk"
                    }
                />*/} 
            </StyledBannerContainer>
            
            <StyledLinksContainer>
                {/*<StyledNav>
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
                </StyledNav>*/}
                {<StyledFigure>
                    <StyledImage src={ArrowDownImage} alt="Seta para baixo" />
                </StyledFigure>}

                    <StyledBannerUl>
                        {navItems.map((item) => (
                            <StyledBannerAux>
                                <StyledBannerLink
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </StyledBannerLink>
                                </StyledBannerAux>
                        ))}
                    </StyledBannerUl>

                {/*
                {<StyledLiveBox>  
                    <Button
                        text={{
                            value: "AO VIVO",
                            fontSize: getFontSize(1) || "1.2rem",
                            fontWeight: 600,
                            color: "#000000",
                        }}
                        icon={{
                            url: LiveIcon,
                            position: "left",
                            width: "2rem",
                            height: "1.2rem",
                        }}
                        disabled={false}
                        size={"small"}
                        backgroundColor={"var(--white-2)"}
                        url={
                            "https://youtube.com/live/MpB-VX9KyCs?feature=share"
                        }
                    />
                </StyledLiveBox>}*/}
            </StyledLinksContainer>
        </StyledContainer>
    );
};

export default Home;
