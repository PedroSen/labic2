//import { Link } from "react-router-dom";
import styled from "styled-components";
import fundo from "../../../public/assets/images/LABIC_BRASIL/HOME BIOMAS.png";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 4rem 0.3rem 3rem;
    min-height: 1080px;
    gap: 2rem;
    position: relative;
    overflow: hidden;
    background-image: url(${fundo});
    background-size: cover;
    filter: drop-shadow(5px 20px 50px rgba(0, 0, 0, 0.5));

    @media (max-width: 1700px) {
        background-size: auto;
    }
`;

export const StyledBannerTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 35px;

    @media (max-width: 1699px) {
        padding-left: 0;
    }
`;

export const StyledBannerText = styled.p`
    font-family: var(--poppins);
    font-size: 1.4rem;
    color: var(--black);
    font-weight: bold;
    max-width: 350px;
    line-height: 22px;
    margin-bottom: 30px;

    @media (max-width: 1699px) {
        text-align: justify;
    }
`;

export const StyledBannerText2 = styled.p`
    font-family: var(--poppins);
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--black);
    max-width: 350px;
    line-height: 22px;

    @media (max-width: 1699px) {
        text-align: justify;
    }
`;


export const StyledBannerUl = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    text-align: center;
    @media (max-width: 540px) {
        width: 100%;
        padding: 0;
    }
`;

export const StyledBannerLi = styled.li``;

export const StyledBannerAux = styled.div`
    display: flex;    
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 0.75rem;
    transition: transform 0.5s;
    background-color: #BE4425;
    width: 520px;
    height: max-content;
    padding: 0.7rem 1rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.8);
    }
    @media (max-width: 650px) {
        width: 300px;
    }
`

export const StyledBannerLink = styled.a`
  text-decoration: none;
  font-size: 1.7rem;
  text-align: center;
  justify-content: center;
  transition: text-shadow 0.3s;
  color: white;
  font-weight: 900;
  font-family: var(--poppins);

  &:hover {
    text-shadow: 0 0 2rem rgba(255, 255, 255, 1);
  }

  @media (max-width: 650px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

export const StyledBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2.2rem;

    @media (max-width: 1699px) {
        align-items: center;
    }
    @media (max-width: 540px) {
        width: 100%;
    }
`;

export const StyledBannerFigure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
  

    @media (max-width: 1448px) {
        width: 100%;
    }
    @media (max-width: 540px) {
        width: 100%;
        padding: 0;
    }
`;

export const StyledBannerImage = styled.img`
    width: 515px;
    height: 223px;

    @media (max-width: 580px) {
        width: 100%;
        height: auto;
    }
`;

export const StyledBannerTitle = styled.h2`
    font-family: var(--open-sans);
    font-size: 1.6rem;
    font-weight: bold;
    color: #ffffff;
    background-color: var(--pink-1);
    padding: 1rem 2rem;
    text-align: center;

    @media (max-width: 1448px) {
        font-size: 1.5rem;
        padding: 1rem 0.5rem;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`;

export const StyledLinksContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;

    @media (max-width: 1448px) {
        margin: 1rem;
    }
`;

export const StyledNav = styled.nav`
    width: 33.3%;

    @media (max-width: 1448px) {
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

export const StyledFigure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledImage = styled.img`
    width: 6rem;
`;

export const StyledLiveBox = styled.div`
    width: 33.3%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 1448px) {
        justify-content: center;
    }

    @media (max-width: 540px) {
        width: auto;
    }

    &:first-child {
        order: 2;
    }
`;
