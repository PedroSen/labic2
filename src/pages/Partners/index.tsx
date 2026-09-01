import Title from "../../components/Title";
import PartnerCard from "./components/PartnerCard";
import { Container, ContentDiv } from "./style";
import ninja from "../../../public/assets/images/PLABIC2/ninjalogo.png";
import jp from "../../../public/assets/images/PLABIC2/redejplogo.png";
import pr5 from "../../../public/assets/images/PLABIC2/extensaologo.png";
import minc from "../../../public/assets/images/PLABIC2/minc.png";
import terraco from "../../../public/assets/images/PLABIC2/terracoverde.png";
import parana from "../../../public/assets/images/PLABIC2/comiteparana.png";
import unib from "../../../public/assets/images/PLABIC2/unibrasi.png";
import proec from "../../../public/assets/images/PLABIC2/proec.png";
import ufc from "../../../public/assets/images/F2025/ufc1.png";
import kuya from "../../../public/assets/images/F2025/kuya1.png";
import ceara from "../../../public/assets/images/F2025/governoceara2.png";
import rouanet from "../../../public/assets/images/F2025/leirouanet.png";
import alimenta from "../../../public/assets/images/F2025/alimenta1.png";
import mirante from "../../../public/assets/images/F2025/mirante2.png";
import pinacoteca from "../../../public/assets/images/F2025/pinacoteca1.png";
import proex from "../../../public/assets/images/F2025/proex1.png";

const Partners = () => {
    return(
        <Container>
            <Title text="NOSSOS PARCEIROS" color="var(--white-2)"/>
            <ContentDiv>
                <PartnerCard name="Midia Ninja" img={ninja} description=""/>
                <PartnerCard name="Jornalistas Pretos" img={jp} description="Rede de Jornalistas pela Diversidade na Comunicação"/>
                <PartnerCard name="Pró-Reitoria de Extensão da UFRJ" img={pr5} description=""/>
                <PartnerCard name="Secretaria do Livro e Leitura do MinC" img={minc} description=""/>
            </ContentDiv>
            <ContentDiv>
                <PartnerCard name="Pró-Reitoria de Extensão da UFC" img={ufc} description=""/>
                <PartnerCard name="Pinacoteca" img={pinacoteca} description=""/>
                <PartnerCard name="Mercado Alimenta" img={alimenta} description=""/>
                <PartnerCard name="Centro de Design do Ceará" img={kuya} description=""/>
            </ContentDiv>
            <ContentDiv>
                <PartnerCard name="Lei Rouanet" img={rouanet} description=""/>
                <PartnerCard name="Pró-Reitoria de Extensão" img={proex} description=""/>
                <PartnerCard name="Secretaria de Cultura do Ceará" img={ceara} description=""/>
                <PartnerCard name="Instituto Mirante" img={mirante} description=""/>
            </ContentDiv>
            <ContentDiv>
                <PartnerCard name="Terraço Verde" img={terraco} description=""/>
                <PartnerCard name="Comitê de Cultura do Paraná" img={parana} description=""/>
                <PartnerCard name="Pró-Reitoria de Extensão da UnB" img={unib} description=""/>
                <PartnerCard name="Pró-Reitoria de Extensão da UFPR" img={proec} description=""/>
            </ContentDiv>
        </Container>
    );

};

export default Partners;