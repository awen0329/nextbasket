"use client";

import { Box } from "@mui/material";
import { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery({ images }: { images: string[] }) {
  const swiper1Ref = useRef<SwiperRef>(null);

  const handleSwiperClick = (index: number) => {
    if (swiper1Ref.current && swiper1Ref.current?.swiper) {
      swiper1Ref.current.swiper.slideTo(index);
    }
  };

  return (
    <>
      <Box width="100%">
        <Swiper
          ref={swiper1Ref}
          modules={[Navigation, Pagination]}
          navigation
          tabIndex={2}
          init
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(swiper) => console.log(swiper)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <Box
                component="img"
                src={image}
                alt="Product Image"
                sx={{
                  height: { md: "450px", xs: "277px" },
                  width: "100%",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box pt={2.5} width="100%">
        <Swiper
          className="thumbnails"
          spaceBetween={20}
          tabIndex={2}
          slidesPerView={"auto"}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image} onClick={() => handleSwiperClick(index)}>
              <Box
                component="img"
                src={image}
                alt="Product Image"
                sx={{ height: "75px", width: "100px" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
