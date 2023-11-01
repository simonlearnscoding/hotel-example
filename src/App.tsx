import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/Navbar/NavBar";
import { ImagineLocarno } from "./Components/Imagine_Locarno/Background_imagine";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
//

import BackgroundImage from "./assets/background-4.jpeg";
import BackgroundImage2 from "./assets/background-2.jpeg";
function App() {
  return (
    <div className="bg-[#F8F3EB] heropattern-glamorous-stone-200 h-screen heropattern-jigsaw-red-100">
      <Parallax pages={3}>
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
        <ParallaxLayer offset={1} speed={1}>
          <ImagineLocarno />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${BackgroundImage2})`,
            backgroundPosition: "25% 0%", // 25% from the left and 50% from the top
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

        <ParallaxLayer offset={2} speed={1}>
          <div className="w-8/12 h-full z-300 text-white text-4xl flex flex-col items-start pt-32 font-serif pl-8 justify-start  ">
            <div className="text-4xl pb-8">
              Explore Locarno as you never did before
            </div>

            <div className="text-xl">
              Imagine...Locarno at the foot of the Matterhorn, kind of. The lake
              captivates you, your homies follow your steps, laughing their ass
              off.
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
      <NavBar />
    </div>
  );
}

export default App;
