import EbookButton from "../Ebookbutton";
import { Container2, EbookLogo, StyledContainer } from "./style";
import logo from "../../../../../public/assets/images/ebooklogo.png";
import Title from "../../../../components/Title";



const SectionZero = () => {
    return( 
        
        <StyledContainer>
            <Title text="e-BOOK INOVAÇÃO CIDADÃ" color="white" backgroundColor="#fcfcfc68"/>
            <Container2>
                <EbookLogo src={logo}/>
                <EbookButton text="Clique aqui para baixar!" url="https://forms.gle/iFEvAJfFY7UP1V6q9"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionZero;