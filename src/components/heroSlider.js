
import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
//swiper module
import { EffectFade } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
// import swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
//import required module

//image
import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';

const slides = [
  {
    title:'RÉSERVER MAINTENANT VOTRE FUTUR LOGEMENT',
    bg:Img1,
  },
  {
    title:'RÉSERVER MAINTENANT VOTRE FUTUR LOGEMENT',
    bg:Img2,
  },
  {
    title:'RÉSERVER MAINTENANT VOTRE FUTUR LOGEMENT',
    bg:Img3,
  },
];


const heroSlider = () => {
  return (
  <Swiper modules={[EffectFade, Autoplay]}
  effect={'fade'}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }} 
  className='heroSlider h-[600px] lg:h-[860px]'>
    {slides.map((slide, index) => {
      // destructure slide    
      // eslint-disable-next-line no-unused-vars
      const {title, bg} = slide;
      return( 
        <SwiperSlide 
          className='h-full bg-pink-400 relative flex justify-center items-center' 
          key={index}
        >
          <div className='absolute top-0 w-full h-full'>
            <img className='object-cover h-full w-full' src={bg} alt="" />
          </div>
          {/*overlay*/}
          <div className='absolute w-full h-full bg-black/70'></div>
        </SwiperSlide>
      );
    }
    )
    }
  </Swiper>
  );
};

export default heroSlider;