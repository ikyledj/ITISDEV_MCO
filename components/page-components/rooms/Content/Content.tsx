import HeroSection from "@/components/reusable/HeroSection/HeroSection";
import Section from "@/components/reusable/Section/Section";
import React from "react";
import RoomCard from "../RoomCard/RoomCard";
import Testimonial from "@/components/reusable/Testimonial/Testimonial";
const roomData = [
  {
    title: "single room",
    images: [
      "/assets/rooms/room1.jpg",
      "/assets/rooms/room2.jpg",
      "/assets/rooms/room3.jpg",
    ],
  },
  {
    title: "double room",
    images: [
      "/assets/rooms/room2.jpg",
      "/assets/rooms/room1.jpg",
      "/assets/rooms/room3.jpg",
    ],
  },
  {
    title: "twin room",
    images: [
      "/assets/rooms/room3.jpg",
      "/assets/rooms/room1.jpg",
      "/assets/rooms/room2.jpg",
    ],
  },
];
const Content = () => {
  return (
    <>
      <HeroSection darken />
      <Section>
        <div className="mx-auto font-primary text-center mt-12 text-black">
          <h2 className="font-primary text-6xl">ROOMS AND RATES</h2>
          <p className="max-w-[1010px] mx-auto mt-4 text-lg font-secondary">
            Each of our bright, light-flooded rooms come with everything you
            could possibly need for a comfortable stay. And yes, comfort isn’t
            our only objective, we also value good design, sleek contemporary
            furnishing complemented by the rich tones of nature’s palette as
            visible from our rooms’ sea-view windows and terraces.{" "}
          </p>
        </div>
        <div className="mt-24 flex flex-col gap-24">
          {roomData.map((room) => (
            <RoomCard
              key={room.title}
              images={room.images}
              roomName={room.title}
            />
          ))}
        </div>
        <Testimonial />
      </Section>
    </>
  );
};

export default Content;
