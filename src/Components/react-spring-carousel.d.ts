declare module 'react-spring-carousel' {
  import { ReactNode } from 'react';

  // Define types for the options passed to useSpringCarousel
  type CarouselItem = {
    id: string; // Adjust the type according to your actual data
    renderItem: ReactNode;
  };

  type UseSpringCarouselOptions = {
    itemsPerSlide: number;
    items: CarouselItem[];
    // ... include other options if the hook accepts more
  };

  type eventProps = {
    eventName : string, nextItem : { id : number }
  }
  // Define types for the returned object from useSpringCarousel
  type UseSpringCarouselReturn = {
    carouselFragment: ReactNode;
    useListenToCustomEvent: (listener: (event: eventProps) => void) => void; // Define a more specific type for 'event' if possible
    slideToPrevItem: () => void;
    slideToNextItem: () => void;
  };

  export function useSpringCarousel(options: UseSpringCarouselOptions): UseSpringCarouselReturn;
}
