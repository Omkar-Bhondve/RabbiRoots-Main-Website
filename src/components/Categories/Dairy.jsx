import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { createUnifiedProducts } from "../../Data/ProductsItems.js";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function Dairy() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const allProducts = createUnifiedProducts().filter(
    (product) =>
      product.category === "ProductOne" || product.category === "ProductTwo"
  );

  return (
    <div className="w-full py-6 px-22 max-lg:px-8">
      <h1 className="font-semibold text-2xl py-4">Dairy, Bread & Eggs</h1>

      <div className="w-full relative">
        <button
          ref={prevRef}
          className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white  text-gray-500 rounded-full w-10 h-10 flex items-center justify-center shadow-xl hover:bg-zinc-200 hover:text-white transition-all duration-200"
          style={{ left: "-20px" }}
          aria-label="Previous"
        >
          <i className="ri-arrow-left-s-line text-2xl"></i>
        </button>
        <button
          ref={nextRef}
          className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white  text-gray-500 rounded-full w-10 h-10 flex items-center justify-center shadow-xl hover:bg-zinc-200 hover:text-white transition-all duration-200"
          style={{ right: "-20px" }}
          aria-label="Next"
        >
          <i className="ri-arrow-right-s-line text-2xl"></i>
        </button>

        {/* Removing the outer Link component to allow individual product links */}
        {/* <Link to={"/card"}> */}
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full mySwiper flex items-center justify-between"
        >
          {allProducts.map((item, idx) => (
            <SwiperSlide
              key={item.globalId || idx}
              className="w-[160px] h-[320px] shadow-md shadow-zinc-300 border-b-1 rounded-xl border-t-1 border-orange-200 px-4 py-4 cursor-pointer flex flex-col justify-between bg-white"
            >
              <Link
                to={`/showitem/${item.globalId}`}
                className="h-full flex flex-col"
              >
                {/* image area */}
                <div className="flex items-center justify-center h-28">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[120px] h-28 object-contain"
                  />
                </div>

                {/* meta */}
                <div className="pt-2">
                  <span className="font-semibold text-[12px] text-gray-900">
                    {item.deliveryTime}
                  </span>
                  <p className="font-bold text-sm py-2 min-h-[44px] text-gray-900 truncate">
                    {item.name}
                  </p>
                  <span className="font-semibold text-[12px] text-gray-900">
                    {item.size || item.quantity || item.volume}
                  </span>
                </div>

                {/* price/add area pinned to bottom */}
                <div className="w-full flex items-center justify-between mt-auto pt-3">
                  <h4 className="font-semibold">₹ {item.price}</h4>
                  <button className="border border-green-500 py-2 px-4 rounded-md uppercase font-semibold text-green-500 cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-200">
                    Add
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Dairy;
