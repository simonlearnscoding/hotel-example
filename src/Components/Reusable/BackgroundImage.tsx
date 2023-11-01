import { useEffect, useState } from "react";

import Scrollbar from "smooth-scrollbar";

type backgroundProps = {
  scrollbar: Scrollbar | null;
  Background: string;
  scrollSpeed: number;
};

export function BackgroundImage({
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
        className="overflow-hidden bg-fixed h-full  bg-no-repeat w-full absolute"
        style={{
          backgroundImage: `url(${Background})`,
          transform: `translateY(${translateY}px) `,

          backgroundPosition: "35% 10%", // 25% from the left and 50% from the top
          backgroundSize: `cover`, // adjust the background size
        }}
      >
        <div className="bg-black opacity-30 h-full w-full absolute"></div>
      </div>
    </>
  );
}
