import React, { useState, useEffect } from "react";
import TitleComponent from "./TitleComponent";
import Background from "./../../assets/background-hotel.jpg";
import { BackgroundImage } from "./BackgroundImage";

export default function HeroSection({ scrollbar }) {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      <BackgroundImage
        scrollbar={scrollbar}
        Background={Background}
        zoomFactor={1.3}
        scrollSpeed={0.8}
      />
      ;
      <TitleComponent />
    </div>
  );
}
