import { useState } from "react";
import { StyledContainer, Container2 } from "./style";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import Title from "../../components/Title";
import MaterialType from "./Components/MaterialType";
import SectionZero from "./Components/SectionZero";



const Material = () => {

    const [selectedSection, setSelectedSection] = useState<number>(1); // Default is SectionOne (1)

    const renderSection = () => {
        switch (selectedSection) {
            case 0: return <SectionZero />;
            case 1: return <SectionOne />;
            case 2: return <SectionTwo />;
            case 3: return <SectionThree />;
            default: return <SectionOne/>; // Fallback to SectionOne
        }
    };


    return(
        <StyledContainer>
            <Title text={"MATERIAIS LABIC"} color={'white'}/>
            <Container2>
            <MaterialType onClick={setSelectedSection}/>
            {renderSection()}
            </Container2>
            
        </StyledContainer>
    );
}

export default Material;