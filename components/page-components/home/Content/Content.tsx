import React from "react";
import HeroSection from "@/components/reusable/HeroSection/HeroSection";
import Section from "@/components/reusable/Section/Section";
import Link from "next/link";
import Image from "next/image";
import Testimonial from "@/components/reusable/Testimonial/Testimonial";

const Content = () => {
  return (
    <>
      <HeroSection />
      <Section>
        <h2 className="text-center text-2xl mt-12">
          All our room types are including complementary breakfast
        </h2>
        <div className="mt-24 grid gap-24">
          <div className="flex items-center justify-between gap-12">
            <div className="flex-1 border-l-2 border-blue pl-8">
              <h3 className="font-primary text-6xl">Luxury redefined</h3>
              <p className="mt-4 text-lg">
                Our rooms are designed to transport you into an environment made
                for leisure. Take your mind off the day-to-day of home life and
                find a private paradise for yourself.
              </p>
              <Link
                href={""}
                className="bg-primary-light px-6 py-2 rounded hover:bg-primary cursor-pointer transition-all text-white font-medium mt-4 inline-block"
              >
                EXPLORE
              </Link>
            </div>
            <div className="flex-1 relative h-[400px]">
              <Image
                src={"/assets/home/image1.png"}
                className="w-full h-full object-cover"
                alt="room"
                fill
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-12">
            <div className="flex-1 border-l-2 border-blue pl-8">
              <h3 className="font-primary text-6xl">
                Leave your worries in the sand
              </h3>
              <p className="mt-4 text-lg">
                We love life at the beach. Being close to the ocean with access
                to endless sandy beach ensures a relaxed state of mind. It seems
                like time stands still watching the ocean.
              </p>
              <Link
                href={""}
                className="bg-primary-light px-6 py-2 rounded hover:bg-primary cursor-pointer transition-all text-white font-medium mt-4 inline-block"
              >
                EXPLORE
              </Link>
            </div>
            <div className="flex-1 relative h-[400px]">
              <Image
                src={"/assets/home/image2.png"}
                className="w-full h-full object-cover"
                alt="room"
                fill
              />
            </div>
          </div>
        </div>
      </Section>
      <Testimonial />
    </>
  );
};

export default Content;
