import React from "react";
import { useLanguage, LanguageType } from './../../Hooks/LanguageProvider'

const description: Record<LanguageType, string> = {
  EN: "Your Lakeside Escape in the Heart of Locarno.",
  FR: "Votre évasion au bord du lac au cœur de Locarno.",
  IT: "Il tuo rifugio al lago nel cuore di Locarno.",
  DE: "Ihr Seerückzugsort im Herzen von Locarno."
};
export default function TitleComponent() {
  const { language } = useLanguage()
  return (
    <div className="relative mx-auto text-center">
      <div className="Title w-[390px] h-full lg:w-full px-[21px] pt-[300px] pb-[378px] flex-col justify-start items-center gap-11 mt-16 lg:mt-36 inline-flex">
        <div className="HotelLocarno   lg:text-[80px] w-full h-8 text-center text-white text-[41.47px]  font-serit ">
          Hotel Locarno
        </div>
        <div className=" lg:w-11/12 h-[62px] lg:leading-relaed lg:mt-10 lg:text-2xl text-center text-white opacity-90 text-base font-light font-serit px-6 leading-[33.42px]">
          {description[language as LanguageType]}
        </div>
      </div>
    </div>
  );
}
