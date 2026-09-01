import MidiaCard from "../MidiaCard";
import { Container, Title } from "./style";

const SectionOne = () => {

    return(
        <Container>
            <Title>2021</Title>
            <MidiaCard
            text="Laboratório de Inovação da UFRJ oferece apoio financeiro e de gestão a projetos de enfrentamento à Covid-19 - Por Alba Valéria Mendonça, G1 Rio"
            disabled={false}
            url="https://g1.globo.com/rj/rio-de-janeiro/noticia/2021/04/27/laboratorio-de-inovacao-da-ufrj-oferece-apoio-financeiro-e-de-gestao-a-projetos-de-enfrentamento-a-covid-19.ghtml"
            />
    
            <MidiaCard
                text="Laboratório de Inovação da UFRJ oferece R$ 40 mil a projetos de enfrentamento à Covid-19 - Por O Dia"
                disabled={false}
                url="https://odia.ig.com.br/economia/2021/05/6137421-laboratorio-de-inovacao-da-ufrj-oferece-rs-40-mil-a-projetos-de-enfrentamento-a-covid-19.html"
            />

            <MidiaCard
                text="Laboratório de Inovação da UFRJ oferece R$ 40 mil a projetos de enfrentamento à Covid-19 - Por MH"
                disabled={false}
                url="https://www.meiahora.com.br/geral/2021/05/6137491-laboratorio-de-inovacao-da-ufrj-oferece-rs-40-mil-a-projetos-de-enfrentamento-a-covid-19.html"
            />

            <MidiaCard
                text="UFRJ oferece R$ 40 mil a projetos de enfrentamento à Covid-19 - Por Babi Wentz"
                disabled={false}
                url="https://diariodorio.com/ufrj-oferece-r-40-mil-a-projetos-de-enfrentamento-a-covid-19/"
            />
        </Container>
    )
    
}

export default SectionOne;