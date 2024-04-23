// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Room.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
       <Link>  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />  </Link>  
        </SwiperSlide>
        <SwiperSlide>
       <Link>  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />  </Link>  
        </SwiperSlide>
        <SwiperSlide>
       <Link>  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />  </Link>  
        </SwiperSlide>
        <SwiperSlide>
       <Link>  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />  </Link>  
        </SwiperSlide>
        <SwiperSlide>
       <Link>  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />  </Link>  
        </SwiperSlide>
        <SwiperSlide>
       <Link>  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />  </Link>  
        </SwiperSlide>
        <SwiperSlide>
       <Link>  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />  </Link>  
        </SwiperSlide>
        <SwiperSlide>
       <Link>  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />  </Link>  
        </SwiperSlide>
        <SwiperSlide>
       <Link>  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />  </Link>  
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
