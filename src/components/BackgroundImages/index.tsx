import { FC } from "react";
import {
    StyledContainer,
    StyledImage1,
    StyledImage7,
    StyledImage10,
    StyledImage11,
    StyledImage12,
    StyledImage13,
    StyledImage14,
    StyledImage15,
    StyledImage16,
    StyledImage17,
    StyledImage18,
    StyledImage19,
    StyledImage20,
    StyledImage21,
    StyledImage22,
    StyledImage23,
    StyledImage24,
    StyledImage25,
    StyledImage26,
    StyledImage27,
    StyledImage28,
    StyledImage29,
    StyledImage30,
    StyledImage31,
    StyledImage32,
    StyledImage33,
    StyledImage34,
    StyledImage35,
    StyledImage36,
    StyledImage37,
    StyledImage38,
    StyledImage39,
    StyledImage40,
    StyledImage41,
    StyledImage42,
    StyledImage43,
    StyledImage44,
    StyledImage45,
    StyledImage46,
    StyledImage01,
    StyledImage2,
    StyledImage3,
} from "./style.ts";

import CircleImage from "/assets/images/F2025/3.png";
import LinesImage from "/assets/images/F2025/linhanova.png";
import PixelsImage from "/assets/images/pixels.png";

interface BackgroundImagesProps {
    page: string;
    section?: string;
}

const BackgroundImages: FC<BackgroundImagesProps> = ({ page, section }) => {
    const renderImages = () => {
        if (page === "Home") {
            return (
                <StyledContainer>
                    <StyledImage1 src={CircleImage} alt="Imagem 1" /> 
                    <StyledImage01 src={CircleImage} alt="Imagem 01"/>
                    <StyledImage2 src={LinesImage} alt="Imagem 2"/>
                    <StyledImage3 src={CircleImage} alt="Imagem 3"/>
                    <StyledImage7 src={LinesImage} alt="Imagem 7" />
                </StyledContainer>
            );
        } else if (page === "TheProject" && section == "One") {
            return (
                <StyledContainer>
                    <StyledImage10 src={CircleImage} alt="Imagem 10" />
                    <StyledImage11 src={CircleImage} alt="Imagem 11" />
                    <StyledImage12 src={LinesImage} alt="Imagem 12" />
                    <StyledImage13 src={LinesImage} alt="Imagem 13" />
                    <StyledImage14 src={PixelsImage} alt="Imagem 14" />
                </StyledContainer>
            );
        } else if (page === "TheProject" && section == "Two") {
            return (
                <StyledContainer>
                    <StyledImage15 src={CircleImage} alt="Imagem 15" />
                    <StyledImage16 src={CircleImage} alt="Imagem 16" />
                    <StyledImage17 src={CircleImage} alt="Imagem 17" />
                    <StyledImage18 src={LinesImage} alt="Imagem 18" />
                    <StyledImage19 src={CircleImage} alt="Imagem 19" />
                </StyledContainer>
            );
        } else if (page === "TheProject" && section == "Three") {
            return (
                <StyledContainer>
                    <StyledImage20 src={CircleImage} alt="Imagem 20" />
                    <StyledImage21 src={CircleImage} alt="Imagem 21" />
                    <StyledImage22 src={LinesImage} alt="Imagem 22" />
                    <StyledImage23 src={PixelsImage} alt="Imagem 23" />
                </StyledContainer>
            );
        } else if (page === "TheProject" && section == "Five") {
            return (
                <StyledContainer>
                    <StyledImage24 src={PixelsImage} alt="Imagem 27" />
                    <StyledImage25 src={PixelsImage} alt="Imagem 28" />
                    <StyledImage26 src={CircleImage} alt="Imagem 24" />
                    <StyledImage27 src={CircleImage} alt="Imagem 25" />
                    <StyledImage28 src={CircleImage} alt="Imagem 26" />
                    <StyledImage29 src={LinesImage} alt="Imagem 29" />
                </StyledContainer>
            );
        } else if (page === "TheProject" && section == "Six") {
            return (
                <StyledContainer>
                    <StyledImage30 src={CircleImage} alt="Imagem 30"/>
                    <StyledImage31 src={CircleImage} alt="Imagem 31" />
                    <StyledImage32 src={CircleImage} alt="Imagem 32" />
                    <StyledImage33 src={LinesImage} alt="Imagem 33" />
                </StyledContainer>
            );
        } else if (page === "Registrations") {
            return (
                <StyledContainer>
                    <StyledImage34 src={PixelsImage} alt="Imagem 34" />
                    <StyledImage35 src={PixelsImage} alt="Imagem 35" />
                    <StyledImage36 src={CircleImage} alt="Imagem 36" />
                    <StyledImage37 src={CircleImage} alt="Imagem 37" />
                    <StyledImage38 src={CircleImage} alt="Imagem 38" />
                    <StyledImage39 src={CircleImage} alt="Imagem 39" />
                </StyledContainer>
            );
        } else if (page === "Scheduling") {
            return (
                <StyledContainer>
                    <StyledImage40 src={PixelsImage} alt="Imagem 40" />
                    <StyledImage41 src={CircleImage} alt="Imagem 41" />
                    <StyledImage42 src={CircleImage} alt="Imagem 42" />
                    <StyledImage43 src={CircleImage} alt="Imagem 43" />
                    <StyledImage44 src={LinesImage} alt="Imagem 44" />
                    <StyledImage45 src={LinesImage} alt="Imagem 45" />
                    <StyledImage46 src={CircleImage} alt="Imagem 46" />
                </StyledContainer>
            );
        }
    };

    return renderImages();
};

export default BackgroundImages;
