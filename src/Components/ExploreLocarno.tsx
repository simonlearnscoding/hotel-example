// Import the necessary modules


import { useLanguage, LanguageType } from './../Hooks/LanguageProvider'
import React, { useContext } from 'react';
import BackgroundImage2 from "./../assets/background-2.jpeg";
import { WidthContext } from './../Hooks/useWindowWidth';
import { ParallaxLayer } from "@react-spring/parallax";

interface ExploreLocarnoProps {
  container: string;
}


const exploreTitleNarrative: Record<LanguageType, string> = {
  EN: "Explore Locarno like never before.",
  FR: "Explorez Locarno comme jamais auparavant.",
  IT: "Vivi l'incanto segreto di Locarno",
  DE: "Erkunden Sie Locarno wie nie zuvor."
};


const exploreSubtitle: Record<LanguageType, string> = {
  EN: "From dawn till dusk, Locarno shines with life and colors. Live every moment in this jewel of Ticino.",
  FR: "De l'aube au crépuscule, Locarno brille de vie et de couleurs. Vivez chaque instant dans ce joyau du Tessin.",
  IT: "Dall'alba al tramonto, Locarno risplende di vita e colori. Vivi ogni momento in questa gemma del Ticino.",
  DE: "Von der Morgendämmerung bis zur Abenddämmerung erstrahlt Locarno in Leben und Farben. Erleben Sie jeden Moment in diesem Juwel des Tessins."
};

// This is the ExploreLocarno content component
const ExploreLocarnoContent: React.FC<ExploreLocarnoProps> = ({ container }) => {
  const windowWidth = useContext(WidthContext); // use windowWidth as needed
  const { language } = useLanguage()
  return (
    <div
      className={`w-full text-start lg:text-center z-2 h-full flex flex-col items-start lg:items-center md:justify-center lg:justify-start justify-start  text-white text-serif mt-32 z-10 ${container}`}
    >
      <h1 className="text-4xl lg:leading-[5.3rem]  lg:pb-12  lg:pt-32 md:text-[41px] lg:text-[80px] w-6/12 md:w-8/12 pb-8 md:pb-4 ">
        {exploreTitleNarrative[language as LanguageType]}
      </h1>
      <p className="text-xl md:text-2xl  lg:leading-[2.8rem] lg:text-3xl w-8/12 md:w-6/12  md:mb-24 ">
        {exploreSubtitle[language as LanguageType]}
      </p>

    </div>
  );
};
// TODO: discover more button

// This component combines the background, overlay, and ExploreLocarno content
export const ExploreLocarno: React.FC<ExploreLocarnoProps> = ({ container }) => {
  return (
    <>
      {/* Background Layer */}
      <ParallaxLayer
        offset={0.4}
        speed={0.8}
        factor={1.6}
        style={{
          zIndex: 1, // Background z-index set for clarity, though not strictly necessary
        }}
      >
        <div
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${BackgroundImage2})`,
            backgroundPosition: "25% 0%", // Center the background image
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 0.4,
            backgroundColor: "black",
            zIndex: 1, // Overlay should be above the background image
          }}
        />
      </ParallaxLayer>

      {/* Text Content Layer */}
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'start',
          zIndex: 2, // Ensure content is above the overlay
        }}
      >
        <ExploreLocarnoContent container={container} />
      </ParallaxLayer>

      <ParallaxLayer


        offset={0}
        speed={0.5}
        style={{
          display: 'absolute',
          zIndex: 4, // Ensure content is above the overlay
        }}
      >


      </ParallaxLayer>
    </>
  );
};

