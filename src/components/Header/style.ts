import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoClose, IoMenu } from "react-icons/io5";


export const StyledHeader = styled.header<{ isOpen: boolean }>`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    border-bottom: 0.4rem solid #ffffff;
    background-color: var(--black);
    gap: 1rem;
    padding: 2rem 0rem 0.5rem 5%;

    @media (max-width: 859px) {
        height: auto;
        justify-content: space-between;
        padding-right: 3rem;
    }
`;

export const StyledLogoFigure = styled.figure``;

export const StyledLogoImage = styled.img`
    width: 9.8rem;
    height: 4.3rem;
    
`;

export const StyledHeaderNav = styled.nav`
    font-family: var(--poppins);
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
    display: none;
`;

export const InlineNavUl = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    list-style: none;
    flex-wrap: nowrap;
    overflow-x: hide;
    height: stretch;
    font-family: var(--poppins);
    flex-direction: row;
    width: 80%;
    margin-top: 1rem;

    @media (max-width: 859px) {
        display: none;
    }
`;

export const StyledNavUl = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 2rem;
    
    @media (min-width: 860px){
        display: none;
    }
`;

export const StyledUlLi = styled.li`
    text-align: center;
`;

export const StyledUlLink = styled(Link)<{ $isLive?: boolean }>`
    text-decoration: none;
    font-family: 'arial';
    font-style: normal;
    font-size: 1rem;
    transition: text-shadow 0.3s, background-color 0.3s ease, color 0.3s ease;
    color: #ffffff;
    padding: 0.55rem 0.8rem;

    ${({ $isLive }) =>
        $isLive &&
        `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        background: #EDB04E;
        border-radius: 8px;
        color: var(--black);
        `}

    &:hover {
        text-shadow: 0 0 2rem rgba(255, 255, 255, 1);
    }

    @media (max-width: 1004px) {
        font-size: 0.9rem;
    }

    @media (max-width: 920px) {
        font-size: 0.8rem;
    }
`;

export const StyledHeaderResponsiveNav = styled.nav<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    text-align: left;
    position: fixed;
    bottom: 0;
    right: 0;
    transition: transform 0.5s ease-in-out;
    transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(100%)"};
    z-index: 10;
    height: 100vh;
    width: 15%;
    min-width: 150px;
    font-family: var(--poppins);
    font-size: 0.75rem;
    border-left: 0.2rem solid #ffffff;
    @media (min-width: 860px){
        display: none;
    }
`;

export const StyledIconOpen = styled(IoMenu)`
    font-size: 3rem;
    color: #ffffff;
    cursor: pointer;

    @media (min-width: 860px) {
        display: none;
    }
`;

export const StyledIconClose = styled(IoClose)`
    font-size: 4rem;
    color: #ffffff;
    z-index: 20;
    top: 1rem;
    right: 1rem;
    position: fixed;
    cursor: pointer;

    @media (min-width: 1400px) {
        display: none;
    }
`;