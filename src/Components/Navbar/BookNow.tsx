import { WidthContext } from './../../Hooks/useWindowWidth'; // Adjust the import path accordingly
import React, { useContext } from 'react';
interface ButtonProps {
  className?: string;
}

import { useLanguage, LanguageType } from './../../Hooks/LanguageProvider'

const description: Record<LanguageType, string> = {
  EN: "Book Now",
  FR: "Réservez",
  IT: "Prenota Ora",
  DE: "Jetzt Buchen"
};

const MOBILE_BREAKPOINT = 1024;
const BookNowButton: React.FC<ButtonProps> = ({ className }) => {

  const { language } = useLanguage()
  const onClick = () => {
    console.log("u clicked me");
  };
  return (
    <button
      onClick={onClick}
      className={`z-999 bottom-0  lg:border-white border-[1px] text-center  rounded-none active:border-black active:text-black active:bg-lime-200 text-white flex justify-center items-center font-sans  text-xl font-semibold ${className}`}
    >
      {description[language as LanguageType]}
    </button>
  );
};

export const BookNowMobile: React.FC<ButtonProps> = ({
  className,
}) => {

  const windowWidth = useContext(WidthContext);
  if (windowWidth > MOBILE_BREAKPOINT) return null; // Do not render if not mobile

  return (
    <BookNowButton className={`bottom-0 bg-stone-900 fixed w-full h-16  ${className}`} />
  );
};

export const BookNowDesktop: React.FC<ButtonProps> = ({
  className,
}) => {

  const windowWidth = useContext(WidthContext);
  if (windowWidth <= MOBILE_BREAKPOINT) return null; // Do not render if mobile

  return <BookNowButton className={`static w-52 rounded-sm ${className}`} />;
};
