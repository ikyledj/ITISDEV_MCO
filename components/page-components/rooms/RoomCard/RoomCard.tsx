"use client";
import React from "react";
import Slider from "react-slick";
import { AiFillPlusCircle } from "react-icons/ai";
import Image from "next/image";
const RoomCard = ({
  roomName,
  images,
}: {
  roomName: string;
  images: string[];
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <div className=" mx-auto overflow-hidden">
        <div className="relative h-[700px] overflow-hidden">
          <div className="absolute h-svh bg-primary opacity-20 w-full z-10"></div>
          <div className="h-[700px] relative">
            <Slider {...settings} className="dotdot">
              {images.map((src, index) => (
                <Image
                  key={index}
                  width={1000}
                  height={700}
                  src={src}
                  alt={`Room ${index}`}
                  className="w-full h-full object-cover"
                />
              ))}
            </Slider>
          </div>
        </div>

        <div className="relative z-20">
          <div className="bg-primary text-white text-center py-4 text-6xl font-bold uppercase tracking-wide">
            {roomName}
          </div>

          <div className="bg-white px-24 py-4 flex items-center justify-between border-x-2 border-primary border-b-2 h-[200px] rounded-b-2xl">
            <div className="flex items-center gap-2 text-primary font-bold uppercase">
              <AiFillPlusCircle className="text-4xl text-primary-light" />
              <span></span>
            </div>
            <button className="bg-primary-light text-white px-4 py-2 text-lg rounded font-semibold">
              ₱2500<span className="ml-1">Avg/night</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
