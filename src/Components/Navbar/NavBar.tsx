import { useContext } from "react";
import { WidthContext } from "./../../Hooks/useWindowWidth"; // Adjust the import path accordingly
import { BookNowMobile, BookNowDesktop } from "./BookNow";
import { MenuButton } from "./MenuButton";
import { Logo } from "./Logo";
import { Language } from "./Language";


export default function Navbar ( { container } : { container : string } )
{

  const windowWidth = useContext( WidthContext )
  console.log( windowWidth )
  return (
    <>

      <div
        className={ `absolute ${ container } md:mt-6 flex top-0 items-center justify-between   w-full h-20 z-100` }
      >


        <div className="flex">
          <MenuButton />
          { windowWidth > 1024 && <Language /> }
        </div>
        { windowWidth < 1024 && <Language /> }
        <BookNowDesktop />
        <Logo classNames={ container } />
      </div>
      <BookNowMobile />
    </>
  );
}
