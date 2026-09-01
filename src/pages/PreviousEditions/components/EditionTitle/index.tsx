import {FC} from "react"
import { TitleH } from "./style";

interface TitleText{
    text: string;
}

const Title: FC<TitleText> = ({text}) => {
    return(
        <TitleH>{text}</TitleH>
    )
};

export default Title;