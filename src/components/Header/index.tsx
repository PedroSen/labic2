import { FC, useState, useEffect } from "react";
import {
    StyledLogoFigure,
    StyledLogoImage,
    StyledHeader,
    StyledHeaderNav,
    InlineNavUl,
    StyledNavUl,
    StyledUlLi,
    StyledUlLink,
    StyledHeaderResponsiveNav,
    StyledIconOpen,
    StyledIconClose,
    StyledRegistrationMenu,
    StyledRegistrationButton,
    StyledRegistrationDropdown,
    StyledRegistrationLink,
} from "./style.ts";
import Image from "../../../public/assets/images/LABIC_BRASIL/labic 2 biomas.png";
import { Link } from "react-router-dom";

interface NavItems {
    name: string;
    path: string;
}

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [isOpen]);

    const navItems: NavItems[] = [
        //{ name: "HOME", path: "/"},
        //{ name: "e-BOOK", path: "/site-labic/ebook"},

        
        { name: "Ao Vivo", path: "/site-labic/live" },
        { name: "O Projeto", path: "/site-labic/the-project" },
        { name: "Inscrições", path: "#" },
        { name: "Programação", path: "/site-labic/scheduling" },
        { name: "Edições Anteriores", path: "/site-labic/previous-editions" },
        // TODO: Criar página de parceiros
        { name: "Parceiros", path: "/site-labic/parceiros" },
        { name: "Materiais", path: "/site-labic/material" },
        //{ name: "LABIC NA MÍDIA", path: "/site-labic/midia" },
    ];

    const registrationItems: NavItems[] = [
        { name: "Chamada pública", path: "https://docs.google.com/document/d/1Wclx30ZFLCvFYj9901GVeDDZvFEPwMztME08wGuoqS8/edit?usp=sharing" },
        { name: "Inscrições de projetos", path: "https://docs.google.com/forms/d/e/1FAIpQLSfWYHgNXmfvbXrZxzNKAl1DgOOVD-xW4J-WiauRkf0XxzBzJA/viewform" },
        { name: "Inscrições curso de extensão e colaboradores", path: "https://docs.google.com/forms/d/e/1FAIpQLSfaGWR2U_02WYzDSulAovAqQV8oJrNzBVndmAqDyywQAVfKfA/viewform" },
    ];

    const renderNavItem = (item: NavItems, index: number, closeMenu = false) => {
        if (item.name === "Inscrições") {
            return (
                <StyledUlLi key={index}>
                    <StyledRegistrationMenu>
                        <StyledRegistrationButton
                            type="button"
                            aria-expanded={isRegistrationOpen}
                            aria-haspopup="menu"
                            onClick={() => setIsRegistrationOpen(!isRegistrationOpen)}
                        >
                            {item.name}
                        </StyledRegistrationButton>
                        {isRegistrationOpen && (
                            <StyledRegistrationDropdown role="menu">
                                {registrationItems.map((registrationItem) => (
                                    <StyledRegistrationLink
                                        key={registrationItem.name}
                                        href={registrationItem.path}
                                        target="_blank"
                                        rel="noreferrer"
                                        role="menuitem"
                                        onClick={() => {
                                            setIsRegistrationOpen(false);
                                            if (closeMenu) setIsOpen(false);
                                        }}
                                    >
                                        {registrationItem.name}
                                    </StyledRegistrationLink>
                                ))}
                            </StyledRegistrationDropdown>
                        )}
                    </StyledRegistrationMenu>
                </StyledUlLi>
            );
        }

        return (
            <StyledUlLi key={index}>
                <StyledUlLink
                    as={Link}
                    to={item.path}
                    $isLive={item.name === "Ao Vivo"}
                    onClick={() => {
                        setIsRegistrationOpen(false);
                        if (closeMenu) setIsOpen(false);
                    }}
                >
                    {item.name}
                </StyledUlLink>
            </StyledUlLi>
        );
    };

    return (
        <StyledHeader isOpen={isOpen}>
            <StyledLogoFigure>
                <StyledUlLink as={Link} to={navItems[0].path}>
                    <StyledLogoImage src={Image} alt="Logo" />
                </StyledUlLink>
            </StyledLogoFigure>

            <InlineNavUl>
                {navItems.map((item, index) => renderNavItem(item, index))}
            </InlineNavUl>
            
            <StyledIconOpen onClick={() => setIsOpen(!isOpen)} />
            <StyledHeaderResponsiveNav isOpen={isOpen}>
                <StyledNavUl>
                    {navItems.map((item, index) => renderNavItem(item, index, true))}
                </StyledNavUl>
                    <StyledIconClose onClick={() => {setIsOpen(false);
                    setIsRegistrationOpen(false)}} />
            </StyledHeaderResponsiveNav>
            <StyledHeaderNav>
                <StyledNavUl>
                    {navItems.map((item, index) => renderNavItem(item, index))}
                </StyledNavUl>
            </StyledHeaderNav>
        </StyledHeader>
    );
};

export default Header;
