import BackgroundImages from "../../../../components/BackgroundImages";
import EventCard from "../EventCard";
import { StyledSection } from "./style";

const Section = () => {
    return (
        <StyledSection>
            <BackgroundImages page={"Scheduling"} />

            <EventCard
                date="18/09"
                title="Abertura e Debate:"
                subtitle="Transição Digital e  Conferência de Abertura com Preto Zezé"
                time="18:30"
                location="Pinacoteca do Ceará"
                mentors={[
                    "Ivana Bentes – Pró-Reitora de Extensão da UFRJ",
                    "Fabiano Piúba – Secretário de Formação Artística e Cultural, Livro e Leitura (SEFLI/MinC)",
                    "Rian Fontenele – Diretor-Geral e Artístico da Pinacoteca do Ceará",
                    "Lana Nascimento – Pró-Reitora de Extensão da UECE",
                    "Bernadete de Souza – Pró-Reitora de Extensão da UFC",
                    "Tiago Santana – Diretor-Presidente do Instituto Mirante de Cultura Arte",
                    "Preto Zezé (CUFA)"
                ]}
                url="https://youtube.com/live/MpB-VX9KyCs?feature=share"
            />
            <EventCard
                date="19/09"
                title="Apresentação dos projetos selecionados"
                time="10h"
                location="Pinacoteca do Ceará"
                url=" https://youtube.com/live/kmE1a2XAzqM?feature=share"
            />
            <EventCard
                date="19/09"
                title="Floresta Ativista: Narrar Mundos (Mídia Ninja)"
                time="14h"
                location="Pinacoteca do Ceará"
                mentors={[
                    "MEDIAÇÃO: IVANA BENTES"
                ]}
                url="https://youtube.com/live/HQR1PvNJGnQ?feature=share"
            />
            <EventCard
                date="19/09"
                title="Design Ativista"
                time="15h"
                location="Pinacoteca do Ceará"
                mentors={[
                    "Thiago Scherer (Mídia Ninja)"
                ]}
                url="https://youtube.com/live/0iF-1HQXR-I?feature=share"
            />
            <EventCard
                date="20/09"
                title=" Inteligência Artificial Centrada nas Pessoas"
                time="10h"
                location="Pinacoteca do Ceará"
                mentors={[
                    "Cláudio Miceli (UFRJ)"
                ]}
                url="https://youtube.com/live/cUBUDJANG98?feature=share"
            />
            <EventCard
                date="20/09"
                title="Combate à Desinformação e Educação Midiática"
                time="11h"
                location="Pinacoteca do Ceará"
                mentors={[
                    "Tai Nalon (Aos Fatos)",
                ]}
                url="https://youtube.com/live/vn68vIjQxaI?feature=share"
            />
            <EventCard
                date="21/09"
                title="Transição Digital, Memética e Democracia"
                time="09h"
                location="Pinacoteca do Ceará"
                mentors={[
                    "Ivana Bentes (UFRJ)",
                ]}
                url="https://youtube.com/live/fWyOUrRNMPM?feature=share"
            />
            <EventCard
                date="21/09"
                title="Circuito Cultural e Formação"
                time="10h"
                location="Pinacoteca do Ceará"
                mentors={[
                    "Ivan Ferraro (Mídia Ninja e Feira da Música de Fortaleza)",
                    "Valéria Cordeiro (Feira da Música de Fortaleza)"
                ]}
                url="https://youtube.com/live/jgG9vUE2tRg?feature=share"
            />
            <EventCard
                date="21/09"
                title="Cultura Periférica"
                time="11h"
                location="Pinacoteca do Ceará"
                mentors={[
                    "Alécio Fernandes (Pretim Dalest)",
                    "Helen de Sá (Princesinha da Favela)"
                ]}
                url="https://youtube.com/live/VR4ayakulRo?feature=share"
            />
            <EventCard
                date="21/09"
                title="Comunicação Territorial e Cultura Digital"
                time="12h"
                location="Pinacoteca do Ceará"
                mentors={[
                    "Dani Moura (Comunicação Comunitária)",
                    "Uirá Porã (FeliciLab e Laboratório do Futuro da UFC)",
                ]}
                url="https://youtube.com/live/Wt09YlFonL0?feature=share"
            />
        </StyledSection>
    );
};

export default Section;
