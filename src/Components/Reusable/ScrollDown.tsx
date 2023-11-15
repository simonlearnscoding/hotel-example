// ScrollDown.tsx
import React from 'react';
import { Section } from './../../Pages/Homepage';
import { IconBackdrop } from './IconBackdrop'; // Assuming IconBackdrop is in the same folder

interface ScrollDownProps {
  sections: Section[];
  currentSection: Section;
  scrollTo: (page: number) => void;
}

export const ScrollDown: React.FC<ScrollDownProps> = ({ sections, currentSection, scrollTo }) => {
  const currentSectionIndex = sections.findIndex(section => section.sectionName === currentSection.sectionName);
  const isLastSection = currentSectionIndex === sections.length - 1;

  const handleScrollToNext = () => {
    const nextSectionIndex = (currentSectionIndex + 1) % sections.length;
    const nextSection = sections[nextSectionIndex];

    if (nextSection) {
      scrollTo(nextSection.page);
    }
  };

  // Additional classes are passed to the IconBackdrop component
  const iconBackdropClass = `fixed w-16 z-10 md:bottom-4 bottom-20 pointer-events-auto h-16 rounded-full backdrop-blur-sm animate-pulse left-1/2 -translate-x-[50%] icon-rotate ${isLastSection ? 'rotate-180' : ''}`;

  return (
    <IconBackdrop onClick={handleScrollToNext} className={iconBackdropClass} />
  );
};
