import {
    StyledContainer,
    StyledBoxesContainer,
    StyledBox,
    StyledBoxContent,
    StyledTitle,
    StyledContent,
    StyledContentContainer,
    StyledSubtitle,
} from "./style";
import Button from "../../components/Button";
import Title from "../../components/Title";
import BackgroundImages from "../../components/BackgroundImages";

const Registrations = () => {
    const openEvents = [
        {
            title: "CURSO DE EXTENSÃO",
            content:
                "Formação em Cultura Digital é um Curso de Extensão oferecido pela Universidade Federal do Rio de Janeiro (UFRJ) e pelo Ministério da Cultura (MinC). A ação conta com o apoio da Mídia NINJA. O curso acontece de 13 a 16 de novembro de forma remota (on-line) e síncrona (transmissão ao vivo). No dia 15/11 (feriado) teremos atividade normalmente.",
            subtitle: "INSCRIÇÕES ATÉ 08/11/2024",
            buttonText: "INSCREVA-SE",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSepEEjZLQJR7PX0HZDEoQ5HK46bJiSsNilRNzmGK_X8dydQAQ/viewform"
        },
        {
            title: "PARA COLABORADORES",
            content:
                "Inscreva-se como colaborador e participe de todos os encontros e mentorias. Os colaboradores auxiliam no desenvolvimento dos projetos",
            subtitle: "INSCRIÇÕES ATÉ 04/10/2024",
            buttonText: "ENCERRADA",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSd2ESN3BFwkiSKR6TtJAKgFkwjbYaiL7Dm6-gtV-BtsvYocgQ/viewform"
        },
        {
            title: "PARA PROJETOS",
            content:
                "Esta Chamada Pública é direcionada para projetos sediados no estado do PARANÁ. A ação acontecerá presencialmente na cidade de CURITIBA.",
            subtitle: "INSCRIÇÕES ATÉ 03/11/2024",
            buttonText: "INSCREVA-SE",
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdTy9XYcL-dV76Ted_-9trkLgWEG5IFvzl-pBmn43kRKIxXsg/viewform"
        },
    ];

    return (
        <StyledContainer>
            <Title text={"Inscrições"} backgroundColor={"var(--purple-4)"} />
            <StyledContentContainer>
                <BackgroundImages page="Registrations" />

                <StyledBoxesContainer>
                    {openEvents.map((event, index) => (
                        <StyledBox>
                            <StyledBoxContent key={index}>
                                <StyledTitle>{event.title}</StyledTitle>
                                <StyledContent>{event.content}</StyledContent>
                                {event.subtitle && (
                                    <StyledSubtitle>
                                        {event.subtitle}
                                    </StyledSubtitle>
                                )}
                                <Button
                                    text={{
                                        value: event.buttonText,
                                        fontSize: "1.4rem",
                                        fontWeight: 700,
                                        color: "var(--purple-2)",
                                    }}
                                    disabled={event.buttonText === "ENCERRADA"}
                                    size={"small"}
                                    url={event.url}
                                />
                            </StyledBoxContent>
                        </StyledBox>
                    ))}
                </StyledBoxesContainer>
            </StyledContentContainer>
        </StyledContainer>
    );
};

export default Registrations;
