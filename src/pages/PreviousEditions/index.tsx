import { FC, useState } from 'react';
import Title from "../../components/Title";
import { StyledContainer } from "./styles";
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';
import SectionSeven from './components/SectionSeven';
import SectionEight from './components/SectionEight';
import SectionNine from './components/SectionNine';
import SectionTen from './components/SectionTen';
import SectionButton from './components/SectionButton'; // Make sure this is the correct import
import SectionEleven from './components/SectionEleven';
import SectionTwelve from './components/SectionTwelve';
import SectionThirteen from './components/SectionThirteen';
import SectionFourteen from './components/SectionFourteen';

const PreviousEditions: FC = () => {
    const [selectedSection, setSelectedSection] = useState<number>(14); // Default is SectionOne (1)

    const renderSection = () => {
        switch (selectedSection) {
            case 1: return <SectionOne />;
            case 2: return <SectionTwo />;
            case 3: return <SectionThree />;
            case 4: return <SectionFour />;
            case 5: return <SectionFive />;
            case 6: return <SectionSix />;
            case 7: return <SectionSeven />;
            case 8: return <SectionEight />;
            case 9: return <SectionNine />;
            case 10: return <SectionTen />;
            case 11: return <SectionEleven/>;
            case 12: return <SectionTwelve/>;
            case 13: return <SectionThirteen/>;
            case 14: return <SectionFourteen/>;
            default: return <SectionFourteen />; // Fallback to SectionFourteen
        }
    };

    return (
        <StyledContainer>
            <Title text={"Edições Anteriores"} backgroundColor={'#fcfcfc68'} color={'white'}/>
            <SectionButton onClick={setSelectedSection} />
            {renderSection()}
            
            
        </StyledContainer>
    );
};

export default PreviousEditions;
