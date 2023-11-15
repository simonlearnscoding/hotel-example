import { useSpringCarousel } from "react-spring-carousel";
import { useContext } from 'react';
import { WidthContext } from "./../Hooks/useWindowWidth"; // Adjust the import path accordingly
import { Link } from 'react-router-dom'
import { Room, DefaultRooms } from './../Data/defaultRoomsData'
import { useState } from "react";

import { useLanguage, LanguageType } from './../Hooks/LanguageProvider'

const ourRoomsTitle: Record<LanguageType, string> = {
  EN: "Our Rooms",
  FR: "Nos Chambres",
  IT: "Le Nostre Camere",
  DE: "Unsere Zimmer"
};


const discoverMore: Record<LanguageType, string> = {
  EN: "SEE DETAILS",
  FR: "VOIR PLUS ",
  IT: "VEDI DETTAGLI",
  DE: "DETAILS ANZEIGEN",
};
import { IconBackdrop } from './Reusable/IconBackdrop'; // Assuming IconBackdrop is in the same folder
export function OurRooms({ container }: { container?: string }) {
  const [activeItem, setActiveItem] = useState<number>(1); // Define the type if you're using TypeScript

  const { language } = useLanguage()
  // Get the current window Width
  const windowWidth = useContext(WidthContext)
  return (
    <div className={`${container} h-full mt-24   pb-32 lg:pb-8 flex flex-col bg-black`}>
      <h1 className="md:pt-4 lg:mt-28 lg:mb-2">{ourRoomsTitle[language as LanguageType]}</h1>
      {/* Pass activeItem and setActiveItem as props to Component */}
      <Component activeItem={activeItem} setActiveItem={setActiveItem} />
      {windowWidth < 1024 &&

        <div className="flex w-full mb-10  justify-center pt-1">

          {DefaultRooms.map((room) => (
            <div
              key={room.id}
              className={`w-4 h-4 mx-2 rounded-full ${activeItem === Number(room.id) ? "bg-white" : "bg-gray-400"
                }`}
            />
          ))}
        </div>

      }
    </div>
  );
}

export function Component({
  activeItem,
  setActiveItem,
}: {
  activeItem: number;
  setActiveItem: (activeItemIndex: number) => void;
}) {

  const windowWidth = useContext(WidthContext)

  function isItemActiveMobile(roomId: number): boolean {

    return (roomId === activeItem)
  }

  function isItemActiveDesktop(roomId: number): boolean {
    let activeArray = []
    for (let i = 0; i < 3; i++) {
      activeArray.push(activeItem + i); // check if in range 3 of active item

    }
    return activeArray.includes(roomId);
  }

  function isMobile(): boolean {
    if (windowWidth < 1024) {
      return true;
    }
    return false;
  }

  const isItemActive = (room: Room): boolean => {
    const roomId = Number(room.id);
    if (isMobile()) {
      return isItemActiveMobile(roomId)
    }
    return isItemActiveDesktop(roomId)
  }

  const { carouselFragment, useListenToCustomEvent, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    itemsPerSlide: windowWidth > 1024 ? 3 : 1,
    items: DefaultRooms.map((i) => ({
      id: i.id,
      renderItem: <RoomComponent room={i} isActive={isItemActive(i)} />,
    })),
  });

  useListenToCustomEvent((event: any) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveItem(Number(event.nextItem.id));
    }
  });
  function renderRightArrow() {
    if (isMobile()) {
      // return activeItem != DefaultRooms.length
      /// I feel like for mobile its not necessary
      return false
    }
    return activeItem != (DefaultRooms.length - 2)
  }
  function renderLeftArrow() {
    if (isMobile()) { return false }
    return activeItem !== 1
  }


  return <div className="flex-1 relative     flex justify-end mt-4  ">

    {renderLeftArrow() &&
      <div className='' >
        <IconBackdrop onClick={slideToPrevItem} className={'absolute  left-4 top-1/2 rotate-90  -translate-y-1/2 z-30'} />
      </div>
    }
    {carouselFragment}
    {renderRightArrow() &&
      <div className='' >
        <IconBackdrop onClick={slideToNextItem} className={'absolute  right-12 top-1/2 -rotate-90 -translate-y-1/2 z-30'} />
      </div>
    }

  </div>;
}

type RoomComponentProps = {
  room: Room; // This is the correct type for the props
  isActive: boolean;
};
function RoomComponent({
  room,
  isActive,
}: RoomComponentProps) {

  // console.log('Room component has been rendered')

  const { language } = useLanguage()
  const activeClasses = " ";
  const inactiveClasses = "mx-20  lg:mx-20 lg:opacity-80 md:mx-4 opacity-40  ";
  return (
    <div
      className={` relative lg:mb-0 max-h-10/12 lg:max-h-full lg:mr-4 w-full  flex  transition-all mb-4 ${isActive ? activeClasses : inactiveClasses
        }     md:mb-16 lg:mb-0  `}
      style={{ backgroundImage: `url(${room.img})`, backgroundSize: "cover" }} // Added inline styles for background
    >
      {
        // <img src={room.img} alt={`${room.name}`} className="w-full   cover" />{" "}
      }
      <div className="bg-gray-900 opacity-40  md:w-[200] absolute top-0 left-0 w-full h-full">
        {" "}
      </div>
      <div
        className={`description absolute md:gap-20   lg:gap-1 lg:opacity-10 lg:hover:opacity-100 h-full justify-end md:justify-center  ${isActive ? "flex flex-col" : "hidden"
          }  transition-all pb-10 lg:pb-0 p-4 `}
      >
        <h1 className={` transition-all mt-auto lg:mt-0 duration-800 text-3xl md:pt-12 lg:pt-6  lg:mb-auto md:text-5xl md:pb-6  bottom-0 left-0  font-serit text-white `} >
          {room.name[language as LanguageType]}
        </h1>
        <div className="text-white font-sans w-8/12 lg:w-11/12 md:w-6/12 md:text-2xl ">{room.description[language as LanguageType]}</div>
        <Link to={`/Room/${room.id}`} state={{ room: room }} className="text-white hover:text-primary transition-all md:text-2xl lg:mb-8 md:mb-10 font-sans text-[16px] md:mt-auto lg:mt-6 mt-6 font-bold">
          {discoverMore[language as LanguageType]}
        </Link>
      </div>
    </div>
  );
}
