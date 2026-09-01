import { StyledMain } from "./style";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import Title from "../../components/Title";

const TheProject = () => {
    return (
        <StyledMain>
            <Title text={"O Projeto"} color={"#7342f5"} backgroundColor={"var(--white-2)"} /> 
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </StyledMain>
    );
};

export default TheProject;
