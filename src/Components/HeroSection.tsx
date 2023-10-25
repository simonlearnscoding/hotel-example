import React, { useState, useEffect } from "react";
import TitleComponent from "./TitleComponent";
import Background from "./../assets/background-hotel.jpg";

export default function HeroSection({ scrollbar }) {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    if (!scrollbar) return;

    const handleScroll = () => {
      const scrollValue = scrollbar.offset.y;
      // Adjust the 0.5 value for more or less pronounced effect
      setTranslateY(scrollValue * 0.5);
    };

    // Add the event listener
    scrollbar.addListener(handleScroll);

    // Cleanup listener on unmount
    return () => {
      scrollbar.removeListener(handleScroll);
    };
  }, [scrollbar]);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      <div
        className="overflow-hidden bg-cover h-full bg-center bg-no-repeat w-full absolute"
        style={{
          backgroundImage: `url(${Background})`,
          transform: `translateY(${translateY}px)`,
        }}
      ></div>
      <TitleComponent />
    </div>
  );
}
