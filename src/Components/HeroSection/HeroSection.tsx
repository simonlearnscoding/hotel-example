// import React, { useState, useEffect } from "react";
import TitleComponent from "./TitleComponent";
import { ScrollDown } from "./scrollDown";

export default function HeroSection() {
  return (
    <div className="absolute overflow-hidden  h-full w-full flex flex-col items-center justify-center">
      <TitleComponent />
      <ScrollDown />
    </div>
  );
}
