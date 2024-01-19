"use client";

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
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
                width: { md: "100%", xs: "100%" },
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box pt={2.5}>
        <Swiper
          className="thumbnails"
          spaceBetween={20}
          slidesPerView={"auto"}
          onSlideChange={(swiper) => console.log(swiper)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
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
