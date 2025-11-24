import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function ThumbsGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <button
        ref={prevRef}
        className="custom-swiper-button-prev absolute left-0 top-[37%] -translate-y-1/2 z-10 bg-white  text-gray-500 rounded-full w-10 h-10 flex items-center justify-center shadow-xl hover:bg-zinc-200 hover:text-white transition-all duration-200"
        style={{ left: "-20px" }}
        aria-label="Previous"
      >
        <i className="ri-arrow-left-s-line text-2xl"></i>
      </button>
      <button
        ref={nextRef}
        className="custom-swiper-button-next absolute right-0 top-[37%] -translate-y-1/2 z-10 bg-white  text-gray-500 rounded-full w-10 h-10 flex items-center justify-center shadow-xl hover:bg-zinc-200 hover:text-white transition-all duration-200"
        style={{ right: "-20px" }}
        aria-label="Next"
      >
        <i className="ri-arrow-right-s-line text-2xl"></i>
      </button>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiperpagination-color": "#fff",
        }}
        spaceBetween={10}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2 w-full h-[100%]"
      >
        <SwiperSlide className="w-full h-full object-cover">
          <video
            src="./SilderCard/1.mp4"
            className=" rounded-xl"
            loop
            autoPlay
            muted
          ></video>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full object-cover">
          <img src="./SilderCard/2.webp" className=" rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full object-cover">
          <img src="./SilderCard/3.webp" className=" rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full object-cover">
          <img src="./SilderCard/4.webp" className=" rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full object-cover">
          <img src="./SilderCard/5.webp" className=" rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full object-cover">
          <img src="./SilderCard/6.jpg" className=" rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full object-cover">
          <img src="./SilderCard/7.jpg" className=" rounded-xl" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1080: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-5 w-[30rem]"
      >
        <SwiperSlide className="w-full h-full object-cover">
          <video
            src="./SilderCard/1.mp4"
            loop
            autoPlay
            muted
            className="rounded-md"
          ></video>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <img src="./SilderCard/2.webp" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./SilderCard/3.webp" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./SilderCard/4.webp" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./SilderCard/5.webp" className="rounded-md " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./SilderCard/6.jpg" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./SilderCard/7.jpg" className="rounded-md" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ThumbsGallery;
