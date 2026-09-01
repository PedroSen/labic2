import { useState } from "react";
import Title from "../../components/Title";
import { Container } from "./style";
import SectionButton from "./Components/SectionButton";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";
import SectionSix from "./Components/SectionSix";


const Midia = () => {
    const [selectedSection, setSelectedSection] = useState<number>(6); // Default is SectionOne (1)

    const renderSection = () => {
        switch (selectedSection) {
            case 1: return <SectionOne/>;
            case 2: return <SectionTwo />;
            case 3: return <SectionThree />;
            case 4: return <SectionFour />;
            case 6: return <SectionSix />;
            default: return <SectionSix />; // Fallback to SectionOne
        }
    };


    return(
        <Container>
            <Title text={"LABIC NA MIDIA"} backgroundColor={'#fcfcfc68'} color={'white'}/>
            <SectionButton onClick={setSelectedSection}/>
            {renderSection()}
            
        </Container>
    );
}

export default Midia;