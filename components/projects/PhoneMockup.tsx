"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface PhoneMockupProps {
  images: string[];
}

export default function PhoneMockup({ images }: PhoneMockupProps) {
  return (
    <div className="mx-auto w-[260px] rounded-[36px] border-8 border-black bg-black p-2">
      <Swiper  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {images.map((img: string, i: number) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt=""
              width={260}
              height={520}
              className="rounded-[24px] w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
