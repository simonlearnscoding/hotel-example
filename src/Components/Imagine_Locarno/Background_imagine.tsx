
import { useLanguage, LanguageType } from './../../Hooks/LanguageProvider'

const hotelNarrative: Record<LanguageType, string> = {
  EN: "Imagine... Locarno, where the lake meets the sky. At Hotel Locarno, you're family. Dive into relaxation!",
  FR: "Imaginez... Locarno, où le lac touche le ciel. À l'Hôtel Locarno, vous êtes en famille. Plongez dans la détente !",
  IT: "Immagina... Locarno, dove il lago incontra il cielo. All'Hotel Locarno, sei in famiglia. Tuffati nel relax!",
  DE: "Stellen Sie sich vor... Locarno, wo der See den Himmel trifft. Im Hotel Locarno sind Sie Familie. Tauchen Sie ein in Entspannung!"
};

export function ImagineLocarno() {

  const { language } = useLanguage()
  return (
    <>
      <div className="w-full h-full -z-3 flex items-center justify-center  ">
        <div
          className=" w-8/12 text-center text-2xl md:text-3xl md:leading-[3.3rem] lg:w-5/12 leading-[2.8rem] lg:leading-[4rem] lg:text-[41px] font-serif text-white
      "
        >
          {hotelNarrative[language as LanguageType]}
        </div>

      </div>


    </>
  );
}
