import { useEffect, useState } from "react";

import Scrollbar from "smooth-scrollbar";

type backgroundProps = {
  zoomFactor: number;
  scrollbar: Scrollbar;
  Background: string;
  scrollSpeed: number;
};

export function BackgroundImage({
  zoomFactor,
  scrollbar,
  Background,
  scrollSpeed,
}: backgroundProps) {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    if (!scrollbar) return;

    const handleScroll = () => {
      const scrollValue = scrollbar.offset.y;
      // Adjust the 0.5 value for more or less pronounced effect
      setTranslateY(scrollValue * scrollSpeed);
    };

    // Add the event listener
    scrollbar.addListener(handleScroll);

    // Cleanup listener on unmount
    return () => {
      scrollbar.removeListener(handleScroll);
    };
  }, [scrollbar, scrollSpeed]);
  return (
    <>
      <div
        className="overflow-hidden bg-cover h-full bg-center bg-no-repeat w-full absolute"
        style={{
          backgroundImage: `url(${Background})`,
          transform: `translateY(${translateY}px) `,
          maxWidth: "100vw",
          maxHeight: "100vh",
          backgroundSize: `${zoomFactor * 100}%`, // adjust the background size
        }}
      >
        <div className="bg-black opacity-20 h-full w-full absolute"></div>
      </div>
    </>
  );
}
