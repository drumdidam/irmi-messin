import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import ActiveSlider from '../components/ActiveSlider'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import recordingImg from '../assets/Recording.webp'
import composition2 from '../assets/Les_11.jpg'

const Media = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen p-10 border-4 border-amber-50 bg-black">
      {/* Titel */}
      <h1 className="text-white text-4xl mb-8 text-center">Recordings</h1>
      <div>
        <ActiveSlider />
      </div>
    </div>
  );
};

export default Media;
