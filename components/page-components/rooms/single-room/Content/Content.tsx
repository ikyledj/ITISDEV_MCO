"use client";
import Button from "@/components/reusable/Button/Button";
import Section from "@/components/reusable/Section/Section";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";

const Content = () => {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const images = [
    "/assets/rooms/room1.jpg",
    "/assets/rooms/room2.jpg",
    "/assets/rooms/room3.jpg",
  ];
  return (
    <>
      <div className="bg-primary h-[465px] grid place-items-center text-7xl font-bold uppercase text-white">
        <h2>SINGLE ROOM</h2>
      </div>
      <Section>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-4 font-bold text-primary hover:bg-primary-light/20 p-2 rounded cursor-pointer transition-all"
        >
          <MdKeyboardArrowLeft className="bg-primary-light text-white text-lg rounded" />
          BACK
        </button>
        <div className="mt-12 flex gap-24">
          <div className="w-1/2 relative inline-block">
            <Slider {...settings}>
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
          <div className="w-1/2 inline-block">
            <h2 className="font-bold text-primary text-7xl">SINGLE ROOM</h2>
            <span className="text-5xl font-bold block my-8">$147</span>
            <p className="text-lg">
              Beautifully designed space reflecting Asian refinement
              complemented by thoughtful provisions and exceptional panorama of
              Maru&apos;s Beachfront rooms - Single Room a perfect place to
              unwind.
            </p>
            <div className="mt-12">
              <div className="max-w-[170px]">
                <label
                  className="py-2 px-4 rounded border border-gray-400 flex items-center text-lg gap-2 text-primary font-bold uppercase"
                  onClick={() => {
                    const input = document.getElementById(
                      "date"
                    ) as HTMLInputElement | null;
                    input?.showPicker?.();
                  }}
                  htmlFor="date"
                >
                  PICK DATE <MdKeyboardArrowDown className="text-2xl" />
                </label>
                <input
                  type="date"
                  id="date"
                  className="absolute opacity-0 w-0 h-0 pointer-events-none"
                />
              </div>
              <div className="inline-block mt-8">
                <div className="relative flex items-center border px-8 py-2 border-gray-400 rounded-lg text-md font-semibold text-gray-500">
                  <label className="absolute bg-white text-gray-500 -top-3 px-1 left-2 text-sm mb-1">
                    Pick Room and Guests
                  </label>
                  <FaUserFriends className="mr-2 text-gray-500" />
                  <span>1 room, 2 guests</span>
                </div>
              </div>
              <Button
                handler={() => router.push("/rooms/single-room")}
                style="flex items-center gap-2 font-semibold px-6 uppercase text-white mt-6"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 text-primary font-bold text-lg mt-12">
          <AiFillPlusCircle className="text-4xl text-primary-light" />
          VIEW ROOM AMENITIES
        </button>
      </Section>
    </>
  );
};

export default Content;
