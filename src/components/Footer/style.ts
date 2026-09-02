import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const StyledLogoImage = styled.img`
    width: 15rem;
    height: 5.5rem;
`;

export const StyledLogo = styled.div`
    display: flex;

    @media (max-width: 820px) {
        justify-content: flex-start;
        align-items: flex-start;
        margin-right: 50px;
    }
`;

export const StyledLogoFigure = styled.figure`
    justify-self: flex-start;
`;

export const StyledFooter = styled.div`
    display: flex;
    padding: 1rem 7rem;
    justify-content: space-between;
    align-items: center;
    background-color: var(--black);
    margin-top: 1rem;

    @media (max-width: 820px) {
        flex-direction: column;
        gap: 2rem;
        height: auto;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
    }
`;

export const StyledContact = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export const StyledTitle = styled.text`
    font-family: var(--poppins);
    font-style: normal;
    font-weight: 275;
    font-size: 20px;
    line-height: 180%;
    color: #FFFFFF;
`;

export const StyledEmailLink = styled.a`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    text-decoration: none;

    cursor: pointer;
`;

export const StyledIcon = styled.img`
    width: 2rem;

    @media (max-width: 540px) {
        width: 1.5rem;
    }

    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const StyledNav = styled.nav`
    @media (max-width: 820px) {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 540px) {
        width: auto;
    }
`;

export const StyledNavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const StyledNavItem = styled.li`
    width: 1rem;

    &:nth-child(1) {
        width: 2.5rem;
        @media (max-width: 540px) {
            width: 2rem;
        }
    }

    &:nth-child(2) {
        width: 2rem;
        @media (max-width: 540px) {
            width: 1.75rem;
        }
    }

    &:nth-child(3) {
        width: 1.75rem;
        @media (max-width: 540px) {
            width: 1.5rem;
        }
    }
`;

export const StyledNavLink = styled.a`
    text-decoration: none;
`;

export const StyledNavIcon = styled.img`
    width: 100%;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const StyledText = styled.p`
    font-family: var(--open-sans);
    font-size: 1.2rem;
    color: #ffffff;
    font-weight: 500;
    transition: text-shadow 0.2s;

    &:hover {
        text-shadow: 0 0 0.5rem #ffffff;
    }
`;
