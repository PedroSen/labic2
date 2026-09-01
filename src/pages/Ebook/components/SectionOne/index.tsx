import EbookButton from "../Ebookbutton";
import { Container2, EbookLogo, StyledContainer } from "./style";
import logo from "../../../../../public/assets/images/ebookjp.png";
import Title from "../../../../components/Title";



const SectionOne = () => {
    return( 
        
        <StyledContainer>
            <Title text="DIVERSIDADE INCLUSÃO E NOVOS FORMATOS NO JORNALISMO PÓS-CULTURA DIGITAL" color="white" backgroundColor="#fcfcfc68"/>
            <Container2>
                <EbookLogo src={logo}/>
                <EbookButton text="Clique aqui para baixar!" url="https://forms.gle/QxBHHc7ajk6g7eBF7"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionOne;