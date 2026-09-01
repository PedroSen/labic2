//import { Link } from "react-router-dom";
import styled from "styled-components";
import fundo from "../../../public/assets/images/LABIC_BRASIL/HOME BIOMAS.png";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 2rem 4rem 10rem 3rem;
    width: 100%;
    gap: 2rem;
    position: relative;
    overflow: hidden;
    background-image: url(${fundo});
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-size: cover;
    filter: drop-shadow(5px 20px 50px rgba(0, 0, 0, 0.5));

    @media (max-width: 1250px) {
        background-size: 1250px;
    }

    @media (max-width: 540px) {
        gap: 0.5rem;
    }
`;

export const StyledBannerTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 35px;

    @media (max-width: 1448px) {
        padding-left: 10px;
    }

    @media (max-width: 540px) {
        width: 100%;
        padding-left: 0;
    }
`;
export const StyledBannerText = styled.p`
    font-family: var(--poppins);
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--black);
    max-width: 350px;
    line-height: 22px;

    @media (max-width: 1448px) {
        text-align: left;
        width: 100%;
        max-width: 250px;
        font-size: 1rem;
    }
`;
export const StyledBannerText2 = styled.p`
    font-family: var(--poppins);
    font-size: 1.4rem;
    color: var(--black);
    font-weight: bold;
    max-width: 350px;
    line-height: 22px;

    @media (max-width: 1448px) {
        text-align: left;
        width: 100%;
        max-width: 250px;
        font-size: 1rem;
    }
`;

export const StyledBannerLink = styled.a`
  text-decoration: none;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  transition: text-shadow 0.3s;
  color: white;
  font-weight: 900;
  font-family: var(--poppins);

  &:hover {
    text-shadow: 0 0 2rem rgba(255, 255, 255, 1);
  }

  @media (max-width: 587px) {
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const StyledBannerUl = styled.ul`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    text-align: center;

    @media (max-width: 1400px) {
        flex-direction: column;
        gap: 2rem;
    }
    @media (max-width: 540px) {
        width: 100%;
        padding: 0;
    }
`;

export const StyledBannerLi = styled.li`
    @media (max-width: 1400px) {
        text-align: center;
    }
`;

export const StyledBannerAux = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: 0.75rem;
    transition: transform 0.5s;
    background-color: #BE4425;
    max-width: 800px;
    max-height: 150px;
    padding: 0.7rem 4rem;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.8);
    }
`

export const StyledBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    margin-top: 2.2rem;

    @media (max-width: 1448px) {
        justify-content: space-between;
        gap: 1rem;
    }
    @media (max-width: 540px) {
        width: 100%;
        padding: 3rem 0;
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

    @media (max-width: 540px) {
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
    margin-top: 10rem;
    width: 100%;

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

    @media (max-width: 540px) {
        width: 3rem;
    }
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
