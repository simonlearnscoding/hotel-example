
import { useLanguage, LanguageType } from './../Hooks/LanguageProvider'
import { DefaultRooms, Room } from './../Data/defaultRoomsData'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from 'react-router-dom'
import { FullScreenSection } from './../Components/Reusable/SectionWithBackground'
import { useParams } from 'react-router-dom';
import { HiOutlineCube as Cube } from 'react-icons/hi'
import { BsPeople as People } from 'react-icons/bs'
import { PiTelevisionSimpleLight as TV } from 'react-icons/pi'
import { IoIosArrowBack } from 'react-icons/io'

import { ScrollDown } from './../Components/Reusable/ScrollDown'
import { useParallaxScroll } from './../Components/useParallaxScroll'; // path to your custom hook

type RoomProp = {
  container: string,
}
// export function RoomPage({ Room }: RoomProp?) {
//   return <h1>HI MOM!!</h1>
// }
//

type ComponentProps = {
  room: Room,
}
export function RoomPage({ container }: RoomProp) {

  const { language } = useLanguage()

  const sections = [
    { sectionName: 'rooms', breakpoint: 0, page: 0 },
    { sectionName: 'specialties', breakpoint: 12, page: 1 },

  ]
  // useParams will return params as strings
  const { roomId } = useParams()

  // Convert roomId to a number

  // Find the room with the same id as roomId
  const room = DefaultRooms.find((room: Room) => room.id === roomId);

  if (!room) {
    // Handle the case where the room is not found
    return <div>Room not found</div>;
  }

  const { ref, currentSection, scrollTo } = useParallaxScroll(sections);
  if (!ref) {
    return null
  }
  else {

    console.log('rerendered rooms page')
    // Render the room details
    return (
      <div className={` w-screen h-screen `}>


        <Parallax ref={ref} pages={2}>

          <ParallaxLayer offset={0} sticky={{ start: 0, end: 2.7 }} style={{ position: 'fixed', zIndex: 100, pointerEvents: 'none', width: '100%', bottom: '2rem', textAlign: 'center' }}>
            <ScrollDown sections={sections} currentSection={currentSection} scrollTo={scrollTo} />
          </ParallaxLayer>
          <FullScreenSection backgroundImageUrl={room.img_hd} imageSpeed={0.5}>
            <Component room={room} />
          </FullScreenSection>
          <ParallaxLayer sticky={{ start: 0.99, end: 3 }}>
            <div className={` ${container} flex  justify-start flex-1 items-start flex-col  text-4xl w-screen z-10 h-screen`}>
              <div className='  w-full lg:pt-36 pt-24   pb-10 lg:pb-20 lg:text-[47px] text-3xl  '> {room.name[language as LanguageType]} Features</div>
              <div className=" w-full   flex-col lg:flex-row flex-1 flex ">
                <div className=" w-8/12  ">
                  < FeatureItem description={`${room.roomSize}qm`} Icon={Cube} />
                  < FeatureItem description={room.capacity} Icon={People} />
                  < FeatureItem description={room.technologies} Icon={TV} />
                </div>
                <div className="  w-full   flex flex-col pt-8 lg:pt-0 justify-start   ">
                  < DescriptionComponent description={"Spacious room with modern amenities"} />
                  < DescriptionComponent description={"Compoimentary access to the hotel's spa and fitness center"} />
                </div>

                <div className=" w-full h-full lg:mb-24 mb-40 flex    justify-center lg:items-start items-end justify-start">
                  <div className="  text-center flex justify-start px-12  items-center lg:ml-10 lg:fixed   text-white lg:bottom-40 border-[1px] lg:left-0 py-4 border-white flex items-center justify-start font-bold text-lg lg:text-2xl">
                    <div className="hover:text-primary transition-all text-center cursor-pointer
">
                      CHECK AVAILABILITY
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </ParallaxLayer>
        </Parallax>
      </div >
    );

  }
}


function Component({ room }: ComponentProps) {

  const { language } = useLanguage()
  return <div className=" w-full h-full flex justify-center items-center"
  >
    <h1 className="lg:text-[80px] text-4xl font-serit"> {room.name[language] as LanguageType}</h1>

    <div className="w-full md:top-32 md:left-10 top-24 left-4 fixed  ">
      <Link to={'/'} className="text-2xl">  < IoIosArrowBack />  </Link>
    </div>



  </div>

}

type ItemProps = {
  description: {},
  Icon: React.ComponentType
}
function FeatureItem({ description, Icon }: ItemProps) {

  return (
    <>
      <div className=" flex py-4  justify-around   border-white  " >
        <div className="flex px-0 justify-center items-center">
          <Icon size={"32px"} />
        </div>
        <div className=" w-full  h-full lg:px-10 px-4 text-lg lg:text-xl "> {description} </div>
      </div>
    </>
  )
}


function DescriptionComponent({ description }: { description: string }) {

  const { language } = useLanguage()
  return (
    <>
      <div className="  py-4  flex items-center  jusrify-center text-xl    " >
        <div className="w-4 h-4 bg-white rounded-xl mr-8 "></div>
        <div className="w-full h-full">{description}</div>
      </div>
    </>
  )
}

