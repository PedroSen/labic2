import {Swiper, SwiperSlide} from 'swiper/react'
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import {FC} from 'react';
// import styles bundle
import 'swiper/css/bundle';
import 'swiper/element/css/navigation';
import 'swiper/css/pagination';
import { CardImg } from './style';


interface CarouselProps {
    items: {src:string}[]
  }


const Carousel2: FC<CarouselProps> = ({items}) => {

    return (
        <Swiper
          spaceBetween={undefined}
          modules={[Navigation, Pagination, Keyboard]}
          slidesPerView={"auto"}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
            {items.map((item, index) => (
                <SwiperSlide>
                    <CardImg key={index} src={item.src}/>
                </SwiperSlide>
            ))}          
        </Swiper>
      );
}

export default Carousel2;