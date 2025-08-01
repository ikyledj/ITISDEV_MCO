import Image from "next/image";
import React from "react";

const RoomCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div>
      <div className="relative mx-auto overflow-hidden">
        <div className="absolute h-svh bg-primary opacity-20 w-full z-10"></div>
        <div className="relative h-[700px]">
          <Image
            fill
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center absolute bottom-0 left-0 w-full z-20">
          <h2 className="bg-white text-primary font-secondary text-center py-4 px-6 text-5xl font-bold min-w-[684px] uppercase tracking-wide inline-block">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
