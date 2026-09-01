import { FC } from "react";
import { Container, PartnerDescripton, PartnerImg, PartnerName } from "./style";

interface CardProps {
    img: string;
    name: string;
    description: string;
}


const PartnerCard: FC<CardProps> = ({img, name, description}) => {
    return(

        <Container>
            <PartnerImg src ={img}/>
            <PartnerName>{name}</PartnerName>
            <PartnerDescripton>{description}</PartnerDescripton>
        </Container>
    );

};

export default PartnerCard;