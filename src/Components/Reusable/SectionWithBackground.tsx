
import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

// Define the props for the component
type FullScreenSectionProps = {
  backgroundImageUrl : string; // URL of the background image
  overlayOpacity ?: number; // Optional prop to set the opacity of the overlay
  children : React.ReactNode; // Content to display on top of the background
  imageSpeed ?: number,
  contentSpeed ?: number
};

// Define the reusable component
export const FullScreenSection : React.FC<FullScreenSectionProps> = ( {
  backgroundImageUrl,
  overlayOpacity = 0.4, // Default overlay opacity
  imageSpeed = 1,
  contentSpeed = 1,
  children,
} ) =>
{
  return (
    <>
      <ParallaxLayer
        factor={ 1 } // Span exactly one screen
        speed={ imageSpeed }
        style={ {
          zIndex: 1,
        } }
      >

        <div
          style={ {
            backgroundSize: "cover",
            backgroundImage: `url(${ backgroundImageUrl })`,
            backgroundPosition: "25% 0%", // Center the background image
            width: '100%',
            height: '100%',
            position: 'absolute',
          } }
        />
        {/* Overlay */ }
        <div
          style={ {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: overlayOpacity,
            backgroundColor: "black",
            zIndex: 2, // Above the background image
          } }
        />
      </ParallaxLayer>

      <ParallaxLayer
        factor={ 1 } // Span exactly one screen
        speed={ contentSpeed }
        style={ {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3, // Above the overlay
        } }
      >
        { children }
      </ParallaxLayer>
    </>
  );
};
