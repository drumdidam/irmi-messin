import React from "react";


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from 'react-icons/rx'
import Swiper from "swiper";

const ActiveSlider = () => {
  return (
    <div
      className="flex items-center justify-center flex-col h-full"
    >

      <Swiper
        breakpoints={{
          340: {
            slidePerView: 2,
            spaceBetween: 15
          },
          700: {
            slidesPerView: 3,
            spaceBetween
          }
        }}

        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules{[FreeMode, Pagination]}
        className='max-w'
      >

    </div>
  )
}

export default ActiveSlider
