import { useRef, useEffect } from "react";
import HeroSection from "./../Components/HeroSection/HeroSection";
import { ImagineLocarno } from "./../Components/Imagine_Locarno/Background_imagine";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { OurRooms } from "./../Components/OurRooms";
import { ExploreLocarno } from "./../Components/ExploreLocarno";
import BackgroundImage from "./../assets/background-4.jpeg";
import { Footer } from "./../Components/Footer"
import { useParallaxScroll } from './../Components/useParallaxScroll'; // path to your custom hook
import { ScrollDown } from './../Components/Reusable/ScrollDown'

type HomepageProps = {
  container: string
}

export interface Section {
  sectionName: string;
  breakpoint: number;
  page: number;
}
export function Homepage({ container }: HomepageProps) {

  const sections = [
    { sectionName: 'hero', breakpoint: 0, page: 0 },
    { sectionName: 'imagine', breakpoint: 840, page: 1 },
    { sectionName: 'explore', breakpoint: 1460, page: 1.99 },
    { sectionName: 'our_rooms', breakpoint: 2250, page: 2.72 },

  ]
  // This function can be called by child components to scroll to a specific page
  const { ref, currentSection, scrollTo } = useParallaxScroll(sections);
  if (!ref) {
    return null
  }
  else {

    console.log('rerendered homepage')

    return (
      < Parallax ref={ref} pages={4.2} >

        <ParallaxLayer offset={0} sticky={{ start: 0, end: 2.7 }} style={{ position: 'fixed', zIndex: 100, pointerEvents: 'none', width: '100%', bottom: '2rem', textAlign: 'center' }}>
          <ScrollDown sections={sections} currentSection={currentSection} scrollTo={scrollTo} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: "35% 0%", // 25% from the left and 50% from the top
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              opacity: 0.37,
              backgroundColor: "black", // Gray overlay with 20% opacity
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <HeroSection />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={2.5} sticky={{ start: 1, end: 1.2 }}>
          <ImagineLocarno />
        </ParallaxLayer>

        <ParallaxLayer offset={2.9} speed={0.7} factor={1.2} >
          < ExploreLocarno container={container} />;
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={0.5} factor={1} >
          <OurRooms container={container} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.8}>
          <Footer />
        </ParallaxLayer>
        {/* ScrollDown component */}
      </Parallax >
    );
  }
}

