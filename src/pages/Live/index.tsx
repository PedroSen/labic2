import Title from "../../components/Title";
import { StyledContainer, StyledVideo } from "./style";

const Live = () => {
    return (
        <StyledContainer>
            <Title
                text={"Estamos Ao Vivo"}
                backgroundColor={"var(--white-1)"}
            />
            <StyledVideo>
                <iframe
                    width="1000rem"
                    height="400rem"
                    src="https://www.youtube.com/embed/MpB-VX9KyCs?si=VfLZgrefJW9enjGz"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </StyledVideo>
        </StyledContainer>
    );
};

export default Live;
