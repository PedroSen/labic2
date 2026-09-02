import {StyledContainer } from "./style";
import SectionZero from "./components/SectionZero";
import { useState } from "react";
import SectionOne from "./components/SectionOne";
import SectionButton from "./components/SectionButton";



const Ebook = () => {
    const [selectedSection, setSelectedSection] = useState<number>(0);

    const renderSection = () => {
        switch (selectedSection) {
                case 0: return <SectionZero />;
                case 1: return <SectionOne />;
                default: return <SectionZero />; // Fallback to SectionOne
        }
    };

    return (
        <StyledContainer>
            <SectionButton onClick={setSelectedSection} />
            {renderSection()}
            
            
        </StyledContainer>
    );
} 

export default Ebook;