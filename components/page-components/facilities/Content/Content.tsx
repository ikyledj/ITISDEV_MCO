import HeroSection from "@/components/reusable/HeroSection/HeroSection";
import Section from "@/components/reusable/Section/Section";
import React from "react";
import RoomCard from "../RoomCard/RoomCard";
import Testimonial from "@/components/reusable/Testimonial/Testimonial";
const roomCardContent = [
  {
    title: "The Gym",
    image: "/assets/facilities/facility1.jpg",
  },
  {
    title: "poolside bar",
    image: "/assets/facilities/facility2.jpg",
  },
  {
    title: "the spa",
    image: "/assets/facilities/facility3.jpg",
  },
  {
    title: "SWIMMING POOL",
    image: "/assets/facilities/facility4.jpg",
  },
  {
    title: "RESTAURANT",
    image: "/assets/facilities/facility5.jpg",
  },
];
const Content = () => {
  return (
    <>
      <HeroSection secondImage darken />
      <Section>
        <div className="mx-auto font-primary text-center mt-12 text-black">
          <h2 className="font-primary text-6xl">FACILITIES</h2>
          <p className="max-w-[1010px] mx-auto mt-4 text-lg font-secondary">
            We want your stay at our lush hotel to be truly unforgettable. That
            is why we give special attention to all of your needs so that we can
            ensure an experience quite uniquw. Luxury hotels offers the perfect
            setting with stunning views for leisure and our modern luxury resort
            facilities will help you enjoy the best of all.
          </p>
        </div>
        <div className="my-24 flex flex-col gap-24">
          {roomCardContent.map((fac) => (
            <RoomCard key={fac.title} title={fac.title} image={fac.image} />
          ))}
        </div>
        <Testimonial />
      </Section>
    </>
  );
};

export default Content;
