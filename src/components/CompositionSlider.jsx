
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { RecordsData } from "../constants";

const CompositionSlider = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const extractVideoId = (url) => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
  };

  const handleVideoClick = (url) => {
    const id = extractVideoId(url);
    if (id) {
      setActiveVideo(`https://www.youtube.com/embed/${id}?autoplay=1`);
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="flex items-center justify-between  flex-col h-[50vh] w-full">

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          600: {
            slidesPerView: 2.5,
            spaceBetween: 100,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%] h-full"
      >
        {RecordsData.map((item) => (
          <SwiperSlide key={item.title} className="!w-[300px]">
            <div
              className="aspect-square w-full flex flex-col gap-6 group relative shadow-lg text-white px-6 py-8 overflow-hidden cursor-pointer"
              onClick={() => handleVideoClick(item.videoUrl)}
            >
              {/* Background */}
              <div
                className="w-full h-full absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 z-10 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-20 flex flex-col gap-3 overflow-hidden">
                <h1 className="text-[clamp(0.75rem,5vw,1.5rem)] leading-snug break-words max-w-full z-30 transform transition-all duration-300 group-hover:-translate-y-2">
                  {item.title}
                </h1>
                <p className="lg:text-[18px] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-30">
                  {item.content}
                </p>
              </div>

              {/* Arrow */}
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100 z-40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompositionSlider;

