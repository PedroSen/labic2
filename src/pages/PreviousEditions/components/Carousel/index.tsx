import{FC} from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import { ArrowImg, CardImg, CustomArrow } from "./style";
import leftArrow from "/assets/images/leftArrow.png";
import rigthArrow from "/assets/images/rigthArrow.png";
import useWindowSize from "../../../../hooks/useWindowSize"; // Assumindo que você já criou o hook


interface CarouselProps {
  items: {src:string}[]
}
 
const Carrousel: FC<CarouselProps> = ({items}) => {

    const windowSize = useWindowSize();
  
    // Define o número de itens a serem mostrados no Carousel com base no tamanho da tela
    const getVisibleItems = (): number => {
      if (windowSize.width && windowSize.width <= 480) {
        return 1; // Exibe 1 item para telas pequenas (mobile)
      } else if (windowSize.width && windowSize.width <= 1024) {
        return 2; // Exibe 2 itens para telas médias (tablets)
      } else {
        return 3; // Exibe 3 itens para telas grandes (desktop)
      }
    };

  return(
    
      <Carousel show={getVisibleItems()} slide={1} transition={1} responsive={true} dynamic={true}
      leftArrow={<CustomArrow direction="left"><ArrowImg src={rigthArrow}/></CustomArrow>} // Usando o componente estilizado para a seta esquerda
      rightArrow={<CustomArrow direction="right"><ArrowImg src={leftArrow}/></CustomArrow>} // Usando o componente estilizado para a seta direita
      >
        {items.map((item, index) => (
          <CardImg key={index} src={item.src} elements={getVisibleItems()}/>
        ))}
      </Carousel>
  )
}

export default Carrousel;