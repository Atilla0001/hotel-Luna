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
        <SwiperSlide >
          <Link to={"/standart"} >
            <img src="../../src/assets/images/f1.jpg" />
            <p style={{ display: "flex", justifyContent: "center", paddingTop: "15px", fontWeight: "bold" }}>STANDART ROOM</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link  to={"/kingexecutive"}> 
           <img src="../../src/assets/images/f2.jpg" /> 
           <p style={{ display: "flex", justifyContent: "center", paddingTop: "15px", fontWeight: "bold" }}>KING EXECUTIVE ROOM WITH SEA VIEW</p>
           </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link  to={"/kingdeluxe"}> 
           <img src="../../src/assets/images/f3.jpg" />  
           <p style={{ display: "flex", justifyContent: "center", paddingTop: "15px", fontWeight: "bold" }}>KING DELUXE ROOM</p>
           </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link  to={"/bigdeluxe"}> 
           <img src="../../src/assets/images/f4.jpg" /> 
           <p style={{ display: "flex", justifyContent: "center", paddingTop: "15px", fontWeight: "bold" }}>BIG DELUXE ROOM</p>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link  to={"/minimalist"}>  <img src="../../src/assets/images/f5.jpg" /> 
          <p style={{ display: "flex", justifyContent: "center", paddingTop: "15px", fontWeight: "bold" }}>MINIMALIST ROOM</p>
          
           </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link  to={"/twobedroom"}>  <img src="../../src/assets/images/f6.jpg" />  
          <p style={{ display: "flex", justifyContent: "center", paddingTop: "15px", fontWeight: "bold" }}>TWO BEDROOM FAMILY SUITE</p>

          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link  to={"/familysuite"}>  <img src="../../src/assets/images/f7.jpg" /> 
          <p style={{ display: "flex", justifyContent: "center", paddingTop: "15px", fontWeight: "bold" }}>FAMILY SUITE WITH SEA VIEW</p>

           </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link  to={"/cultural"}>  <img src="../../src/assets/images/f88.jpg" /> 
          <p style={{ display: "flex", justifyContent: "center", paddingTop: "15px", fontWeight: "bold" }}>CULTURAL ROOM</p>

           </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link  to={"/twindeluxe"}>  <img src="../../src/assets/images/f9.jpg" /> 
          <p style={{ display: "flex", justifyContent: "center", paddingTop: "15px", fontWeight: "bold" }}>TWIN DELUXE WITH SEA VIEW</p>

           </Link>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
