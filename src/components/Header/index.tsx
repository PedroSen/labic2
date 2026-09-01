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
} from "./style.ts";
import Image from "../../../public/assets/images/LABIC_BRASIL/labic 2 biomas.png";
import { Link } from "react-router-dom";

interface NavItems {
    name: string;
    path: string;
}

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [isOpen]);

    const navItems: NavItems[] = [
        //{ name: "HOME", path: "/"},
        //{ name: "e-BOOK", path: "/site-labic/ebook"},

        
        { name: "Ao Vivo", path: "/site-labic/live" },
        { name: "O Projeto", path: "/site-labic/the-project" },
        { name: "Inscrições", path: "https://forms.gle/JkxXue6jCF4g5R8K7" },
        { name: "Programação", path: "/site-labic/scheduling" },
        { name: "Edições Anteriores", path: "/site-labic/previous-editions" },
        // TODO: Criar página de parceiros
        { name: "Parceiros", path: "/site-labic/parceiros" },
        { name: "Materiais", path: "/site-labic/material" },
        //{ name: "LABIC NA MÍDIA", path: "/site-labic/midia" },
    ];

    return (
        <StyledHeader isOpen={isOpen}>
            <StyledLogoFigure>
                <StyledUlLink as={Link} to={navItems[0].path}>
                    <StyledLogoImage src={Image} alt="Logo" />
                </StyledUlLink>
            </StyledLogoFigure>

            <InlineNavUl>
                {navItems.map((item, index) => {
                    const isLive = item.name === "Ao Vivo";

                    return (
                        <StyledUlLi key={index}>
                            <StyledUlLink
                                as={Link}
                                to={item.path}
                                $isLive={isLive}
                                onClick={() => setIsOpen(true)}
                            >
                                {item.name}
                            </StyledUlLink>
                        </StyledUlLi>
                    );
                })}
            </InlineNavUl>
            
            <StyledIconOpen onClick={() => setIsOpen(!isOpen)} />
            <StyledHeaderResponsiveNav isOpen={isOpen}>
                <StyledNavUl>
                    {navItems.map((item, index) => {
                        const isLive = item.name === "Ao Vivo";

                        return (
                            <StyledUlLi key={index}>
                                <StyledUlLink
                                    as={Link}
                                    to={item.path}
                                    $isLive={isLive}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </StyledUlLink>
                            </StyledUlLi>
                        );
                    })}
                </StyledNavUl>
                {isOpen && (
                    <StyledIconClose onClick={() => setIsOpen(!isOpen)} />
                )}
            </StyledHeaderResponsiveNav>
            <StyledHeaderNav>
                <StyledNavUl>
                    {navItems.map((item, index) => (
                        <StyledUlLi key={index}>
                            <StyledUlLink
                                as={Link}
                                to={item.path}
                                $isLive={item.name === "Ao Vivo"}
                            >
                                {item.name}
                            </StyledUlLink>
                        </StyledUlLi>
                    ))}
                </StyledNavUl>
            </StyledHeaderNav>
        </StyledHeader>
    );
};

export default Header;
