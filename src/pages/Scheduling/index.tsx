import { StyledMain } from "./style";
import Title from "../../components/Title";
import Section from "./components/Section";

const Scheduling = () => {
    return (
        <StyledMain>
            <Title
                text={
                    "Programação completa do LABIC Fortaleza"
                }
                color={"#7342f5"}
                backgroundColor={"#fcfcfc"}
                textWidth="60%"
            />
            <Section/>
        </StyledMain>
    );
};

export default Scheduling;
