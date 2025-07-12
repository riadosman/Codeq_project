"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <div className="my-5 text-center px-3">
      <h1 className="text-center">آراء عملائنا</h1>
      <p
        style={{
          maxWidth: "611px",
          margin: "auto",
          fontWeight: "600",
          fontSize: "1rem",
        }}
      >
        من خلال تعاوننا مع عملائنا، تمكنا من تحقيق رؤاهم وتحويلها إلى نتائج
        ملموسة. اكتشف كيف أسهمت خدماتنا في نجاح مشاريعهم وتحقيق أهدافهم
      </p>

      <div className="mt-5">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1.1,
            },
            768: {
              slidesPerView: 1.5,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2.3,
            },
          }}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
