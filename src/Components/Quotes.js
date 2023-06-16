import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../App.css";
import Quotesimg from "./assets/quotes.png";
import Allan from "./assets/Allan.png";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const slide_img = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ];

const Quotes=()=>{
    return(
        <div className="main-swiper">
        <Swiper
          effect={"coverflow"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          {/* using array */}
          {slide_img.map((img, i) => {
            return (
              <SwiperSlide key={i}>
               <div className="quotebox" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div className="quotes" style={{width:320,height:320,backgroundColor:'#EEEE',borderRadius:2}}>
                    <img src={Quotesimg} style={{width:48,height:48,position:'relative',top:6,left:6}}/>
                    <p style={{textAlign:'center',margin:20 ,fontSize:16,marginTop:32}}> A morning walk to the class with the blooming flowers across the paths and the pleasant breeze from the trees gives me enegry for the day</p>
                    <div style={{display:'flex',justifyContent:'space-between'}}>

                    <img src={Allan} style={{width:55,height:55,marginLeft:20}}/>    
                    <p style={{textAlign:'right',marginRight:16 ,color:'#656565'}}>-Allan Jerrold <br/> 3rd B.tech</p>
                    


                    </div>
                    

                </div>
            </div>
              </SwiperSlide>
            );
          })}
  
          {/* or use normally  */}
  
          {/* <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
          </SwiperSlide> */}
        </Swiper>
      </div>
    )
}

export default Quotes;