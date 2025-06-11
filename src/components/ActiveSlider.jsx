
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const ActiveSlider = () => {
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
    <div className="flex items-center justify-center flex-col h-full w-full cursor-grab">
      <Swiper
        spaceBetween={5}
        breakpoints={{
          600: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (

          <SwiperSlide key={item.title}>
            <div
              className="flex flex-col mb-20 group relative shadow-lg text-white px-3 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer"
              onClick={() => handleVideoClick(item.videoUrl)}
            >
              {/* Video on hover */}
              <video
                src={item.previewVideo}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                muted
                autoPlay
                loop
                playsInline
              />

              {/* Background image underneath video */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 z-10 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-20 flex flex-col gap-3 text-white max-w-full max-w-[calc(100%-1.5rem)]">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl transform transition-all duration-300 group-hover:-translate-y-2 z-30 leading-snug">
                  {item.title}
                </h1>
                <p className="text-sm sm:text-base md:text-[17px] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-30 break-words leading-snug line-clamp-3">
                  {item.content}
                </p>
              </div>

              {/* Arrow */}
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100 z-40" />
            </div>
          </SwiperSlide>

        ))}
      </Swiper>

      {activeVideo && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-[90vw] h-[50vh] md:w-[70vw] md:h-[60vh]">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white text-2xl z-50"
            >
              ✕
            </button>
            <iframe
              src={activeVideo}
              title="YouTube Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveSlider;

