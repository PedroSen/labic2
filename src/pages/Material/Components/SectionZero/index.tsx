import EbookButton from "../EbookButton";
import { Container2, EbookLogo, StyledContainer } from "./style";
import logo from "../../../../../public/assets/images/LABIC_BRASIL/ebook_inovacao.png";
import logo2 from "../../../../../public/assets/images/LABIC_BRASIL/ebook_jp.png"
import logo3 from "../../../../../public/assets/images/ciudadesconectadas2.png";

const SectionZero = () => {
    return( 
        <StyledContainer>
            <Container2>
                <EbookLogo src={logo}/>
                <EbookButton text="Clique aqui para baixar!" url="https://forms.gle/iFEvAJfFY7UP1V6q9"/>
            </Container2>
            <Container2>
                <EbookLogo src={logo2}/>
                <EbookButton text="Clique aqui para baixar!" url="https://forms.gle/QxBHHc7ajk6g7eBF7"/>
            </Container2>
            <Container2>
                <EbookLogo src={logo3}/>
                <EbookButton text="Clique aqui para baixar!" url="https://forms.gle/a13AibegxGfibqyY7"/>
            </Container2>
        </StyledContainer>
    )
}

export default SectionZero;