import React, { useState, useEffect } from "react";
//import AnimatedNumbers from "react-animated-numbers";
import {
    StyledContainer,
    StyledNumberBox,
    StyledNumberWithPlus,
    StyledPlusSign,
    StyledDescription,
} from "./style";
import useWindowSize from "../../../../hooks/useWindowSize";

const MagicNumbers: React.FC = () => {
    const [numProjects] = useState<number>(200);
    const [numEvents] = useState<number>(100);
    const [numCollaborators] = useState<number>(1500);
    const [numExtensionists] = useState<number>(2000);
    const [key, setKey] = useState<number>(0);

    const size = useWindowSize();

    const getFontSize = (): string => {
        if (size.width && size.width < 480) return "2rem";
        if (size.width && size.width < 768) return "3rem";
        return "4rem";
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setKey((prevKey) => prevKey + 1);
        }, 15000);

        return () => clearInterval(interval);
    }, []);
    return (

        <StyledContainer>
            <StyledNumberBox>
                <StyledNumberWithPlus>
                    <StyledPlusSign>+</StyledPlusSign>
                    <p hidden> key={key}</p>
                    {/*<AnimatedNumbers
  
                        transitions={(index: number) => ({
                            type: "spring",
                            duration: index + 1,
                            delay: index,
                            autoplay: true,
                        })}
                        animateToNumber={numProjects}
                        fontStyle={{
                            fontSize: getFontSize(),
                            fontFamily: "var(--poppins)",
                            fontWeight: 700,
                            color: "#FFFFFF",
                        }}
                    />*/}
                    <span style={{
                        fontSize: getFontSize(),
                        fontFamily: "var(--poppins)",
                        fontWeight: 700,
                        color: "#FFFFFF",
                    }}>
                        {numProjects}
                    </span>
                </StyledNumberWithPlus>
                <StyledDescription>projetos apoiados</StyledDescription>
            </StyledNumberBox>
            <StyledNumberBox>
                <StyledNumberWithPlus>
                    <StyledPlusSign>+</StyledPlusSign>
                    {/*<AnimatedNumbers
                        key={key + 1}
                        transitions={(index: number) => ({
                            type: "spring",
                            duration: index + 2,
                            delay: index,
                            autoplay: true,
                        })}
                        animateToNumber={numEvents}
                        fontStyle={{
                            fontSize: getFontSize(),
                            fontFamily: "var(--poppins)",
                            fontWeight: 700,
                            color: "#FFFFFF",
                        }}
                    />*/}
                    <span style={{
                        fontSize: getFontSize(),
                        fontFamily: "var(--poppins)",
                        fontWeight: 700,
                        color: "#FFFFFF",
                    }}>
                        {numEvents}
                    </span>
                </StyledNumberWithPlus>
                <StyledDescription>encontros realizados</StyledDescription>
            </StyledNumberBox>
            <StyledNumberBox>
                <StyledNumberWithPlus>
                    <StyledPlusSign>+</StyledPlusSign>
                    {/*<AnimatedNumbers
                        key={key + 2}
                        transitions={(index: number) => ({
                            type: "spring",
                            duration: index + 3,
                            delay: index,
                            autoplay: true,
                        })}
                        animateToNumber={numCollaborators}
                        fontStyle={{
                            fontSize: getFontSize(),
                            fontFamily: "var(--poppins)",
                            fontWeight: 700,
                            color: "#FFFFFF",
                        }}
                    />*/}
                    <span style={{
                        fontSize: getFontSize(),
                        fontFamily: "var(--poppins)",
                        fontWeight: 700,
                        color: "#FFFFFF",
                    }}>
                        {numCollaborators}
                    </span>
                </StyledNumberWithPlus>
                <StyledDescription>colaboradores</StyledDescription>
            </StyledNumberBox>
            <StyledNumberBox>
                <StyledNumberWithPlus>
                    <StyledPlusSign>+</StyledPlusSign>
                    {/*<AnimatedNumbers
                        key={key + 2}
                        transitions={(index: number) => ({
                            type: "spring",
                            duration: index + 4,
                            delay: index,
                            autoplay: true,
                        })}
                        animateToNumber={numExtensionists}
                        fontStyle={{
                            fontSize: getFontSize(),
                            fontFamily: "var(--poppins)",
                            fontWeight: 700,
                            color: "#FFFFFF",
                        }}
                    />*/}
                    <span style={{
                        fontSize: getFontSize(),
                        fontFamily: "var(--poppins)",
                        fontWeight: 700,
                        color: "#FFFFFF",
                    }}>
                        {numExtensionists}
                    </span>
                </StyledNumberWithPlus>
                <StyledDescription>
                    inscritos nos cursos de extensão
                </StyledDescription>
            </StyledNumberBox>
        </StyledContainer>
    );
};

export default MagicNumbers;
