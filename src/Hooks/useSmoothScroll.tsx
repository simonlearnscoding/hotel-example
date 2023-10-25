import { useEffect, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const useSmoothScroll = () => {
  const [scrollbar, setScrollbar] = useState<Scrollbar | null>(null);

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);

    const rootElement = document.getElementById("root");

    if (!rootElement) {
      console.log("Root element not found!");
      return;
    }

    rootElement.classList.add("h-screen", "w-screen", "overflow-hidden"); // Adding tailwind classes

    const scrollbarInstance = Scrollbar.init(rootElement, {
      damping: 0.07,
      plugins: {
        overscroll: {
          enable: true,
          effect: "glow",
          damping: 0.15,
          maxOverscroll: 150,
          glowColor: "#fff",
        },
      },
    });

    setScrollbar(scrollbarInstance);

    return () => {
      scrollbarInstance?.destroy();
    };
  }, []);

  return scrollbar;
};

export default useSmoothScroll;
