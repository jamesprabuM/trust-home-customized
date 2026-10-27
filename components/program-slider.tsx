"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const programs = [
  { number: "01", title: "Special education", description: "Individualised education that helps children learn, communicate, and build confidence.", color: "mint", icon: "✳", image: "/images/programs/special-education.jpg" },
  { number: "02", title: "Therapy and rehabilitation", description: "Supporting communication, daily activities, mobility, and growing independence.", color: "peach", icon: "⌂", image: "/images/programs/therapy-rehabilitation.jpg" },
  { number: "03", title: "Sustainable agriculture", description: "Building practical skills, environmental awareness, physical activity, and self-reliance.", color: "yellow", icon: "♡", image: "/images/programs/sustainable-agriculture.jpeg" },
  { number: "04", title: "Free food distribution", description: "Providing nutrition support to pregnant women and feeding mothers in local healthcare settings.", color: "lavender", icon: "↗", image: "/images/programs/free-food-distribution.png" },
];

export default function ProgramSlider() {
  return <Swiper modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]} spaceBetween={18} slidesPerView={1.08} navigation pagination={{ clickable: true }} keyboard={{ enabled: true }} autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }} speed={850} a11y={{ enabled: true }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="program-swiper">
    {programs.map((program) => <SwiperSlide key={program.number}>
      <article className={`program-card ${program.color}`}>
        <img className="program-slider-image" src={program.image} alt={`${program.title} at Synthika Trust`} />
        <div className="program-card-top"><span className="program-icon" aria-hidden="true">{program.icon}</span><span className="program-number">{program.number}</span></div>
        <div><h3>{program.title}</h3><p>{program.description}</p></div>
        <a className="text-link" href="/programs">Explore program <ArrowUpRight size={17} aria-hidden="true" /></a>
      </article>
    </SwiperSlide>)}
  </Swiper>;
}
