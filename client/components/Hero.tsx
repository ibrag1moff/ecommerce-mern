"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// components
import HeroSlide from "./HeroSlide";

export default function Hero() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination]}
                loop
                autoplay
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <HeroSlide
                        subtext="old money style"
                        title="timeless elegance"
                        text=" Where Classic Wealth Meets Modern Style."
                        btnHref="products"
                        bg="bg-heroOne"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSlide
                        subtext="men's collection"
                        title="Noble Distinction"
                        text=" The Pinnacle of Classic Distinction."
                        btnHref="men"
                        bg="bg-heroTwo"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSlide
                        subtext="women's collection"
                        title="Classic Refinement"
                        text="Sophistication Woven with Heritage."
                        btnHref="women"
                        bg="bg-heroThree"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
