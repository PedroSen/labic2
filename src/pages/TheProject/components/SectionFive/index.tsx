import {
    StyledSectionFive,
    StyledCards,
    StyledCard,
    StyledIcon,
    StyledTitle,
    StyledContent,
    StyledLink,
} from "./style";
import Title from "../../../../components/Title";
import MediaIcon from "/assets/icons/laptop.png";
import TechnologyIcon from "/assets/icons/technology.png";
import EducationIcon from "/assets/icons/book.png";
import EconomyIcon from "/assets/icons/coin.png";
import MoreIcon from "/assets/icons/more.png";
import BackgroundImages from "../../../../components/BackgroundImages";

const SectionFive = () => {
    const thematicAxes = [
        {
            icon: MediaIcon,
            title: "Mídias, Ações Virtuais e Diversidade",
            content:
                "Projetos, ações, aplicativos e tecnologias que apresentem iniciativas de comunicação em qualquer suporte e linguagem e que estimulem a diversidade de conteúdos e de produtos de mídias.",
        },
        {
            icon: TechnologyIcon,
            title: "Tecnologias, Redes, Dados e Plataformas",
            content:
                "Iniciativas de desenvolvimento de plataformas, redes, aplicativos, programas, tecnologias abertas. Projetos de mineração, análise e visualização de dados.",
        },
        {
            icon: EducationIcon,
            title: "Formação",
            content:
                "Projetos, propostas, metodologias que proponham novas perspectivas em educação, inovação e formação utilizando qualquer linguagem. Como por exemplo: educação inclusiva, formação em rede, livre, de agentes e multiplicadores, formação para a diversidade etc.",
        },
        {
            icon: EconomyIcon,
            title: "Economia e Cidadania",
            content:
                "Iniciativas em novas economias, sustentabilidade, financiamento colaborativo, empreendedorismo social, redes de proteção, inclusão, visibilidade, ampliação de direitos para a diversidade cultural, de gênero, religiosa, étnica etc.",
        },
        {
            icon: MoreIcon,
            title: "Outros temas",
            content:
                "A diversidade temática do LABIC é vasta e cheia de pluralidade.",
            link: {
                text: "Acesse a programação completa para conhecer todos os eixos!",
                url: "https://drive.google.com/file/d/1CF-sd7dLpj80N-NpwenBhwH2WbjkhEpz/view?usp=drivesdk",
            },
        },
    ];

    return (
        <StyledSectionFive>
            <BackgroundImages page={"TheProject"} section={"Five"} />
            <Title
                text={"Principais Eixos Temáticos"}
                backgroundColor={"var(--purple-4)"}
            />
            <StyledCards>
                {thematicAxes.map((axis, index) => (
                    <StyledCard key={index}>
                        <StyledIcon src={axis.icon} alt={axis.title} />
                        <StyledTitle>{axis.title}</StyledTitle>
                        <StyledContent>{axis.content}</StyledContent>
                        {axis.link && (
                            <StyledLink href={axis.link.url} target="_blank">
                                {axis.link.text}
                            </StyledLink>
                        )}
                    </StyledCard>
                ))}
            </StyledCards>
        </StyledSectionFive>
    );
};

export default SectionFive;
