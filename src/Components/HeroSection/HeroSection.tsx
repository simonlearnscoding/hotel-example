// import React, { useState, useEffect } from "react";
import TitleComponent from "./TitleComponent";
import Background from "./../../assets/background-4.jpeg";
import { BackgroundImage } from "./BackgroundImage";

import Scrollbar from "smooth-scrollbar";

type props = {
  scrollbar: Scrollbar;
};
export default function HeroSection({ scrollbar }: props) {
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
