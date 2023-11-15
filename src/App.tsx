import NavBar from "./Components/Navbar/NavBar";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import { WidthProvider } from "./Hooks/useWindowWidth"
import { LanguageProvider } from "./Hooks/LanguageProvider"
// import { Footer } from "./Components/Footer"
import { Homepage } from "./Pages/Homepage"
import { RoomPage } from "./Pages/RoomPage"

const container = "px-4  md:px-10 ";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage container={container} />
  },
  {
    path: '/Room/:roomId',
    element: <RoomPage container={container} />
  }
])
function App() {
  return (
    <LanguageProvider>

      <WidthProvider >
        <div className="bg-black  h-screen  w-screen flex justify-center">
          <div className="flex justify-center ">
            <RouterProvider router={router} />
            <NavBar container={container} />
          </div>
        </div>
      </WidthProvider>
    </LanguageProvider>
  );
}

export default App;
