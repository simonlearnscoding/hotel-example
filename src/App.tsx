import HeroSection from "./Components/HeroSection";
import useSmoothScroll from "./Hooks/useSmoothScroll";
//
//container
// <div className="bg-white mx-auto w-screen sm:px-6 h-screen flex-col lg:px-24 flex justify-center">
function App() {
  const scrollbar = useSmoothScroll();

  return (
    <>
      <div className="w-screen h-screen bg-red-200 ">
        <HeroSection scrollbar={scrollbar} />
        <div className="flex flex-col bg-green-300 jitems-center justify-center bg-blue h-screen "></div>
        <div className="flex flex-col bg-green-300 jitems-center justify-center bg-blue h-screen ">
          HII
        </div>
      </div>
    </>
  );
}

export default App;
