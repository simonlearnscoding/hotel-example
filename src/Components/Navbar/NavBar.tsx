import { BookNowMobile, BookNowDesktop } from "./BookNow";
import { MenuButton } from "./MenuButton";
import { Logo } from "./Logo";
import { Language } from "./Language";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    console.log(scrollPosition);
  };

  // Attach the event listener
  window.addEventListener("scroll", handleScroll);

  // const backgroundColor = scrollPosition > 100 ? "bg-red-500" : "bg-blue-500";
  return (
    <>
      <div
        className={`absolute flex top-0 items-center justify-between px-32 mt-8 w-full h-20 z-100`}
      >
        <div className="flex">
          <MenuButton />
          {windowWidth > 1024 && <Language />}
        </div>
        {windowWidth < 1024 && <Language />}
        <BookNowDesktop windowWidth={windowWidth} />

        <Logo />
      </div>
      <BookNowMobile windowWidth={windowWidth} />
    </>
  );
}
