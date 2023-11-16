import { FC, useState, useCallback } from 'react';

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
// import { Language } from "./Language";
export function MenuButton ()
{
  const [ isActive, toggle ] = useToggle( false );
  function onClick ()
  {
    toggle()
  }
  const menuElements : string[] = [ 'Our Rooms', 'Contact', 'Whatsup homie' ]
  return (
    <>
      <div onClick={ onClick } className={ "    cursor-pointer" }>
        <GiHamburgerMenu size={ "2.5em" } />
      </div >

      <div className={ `menu fixed ${ isActive ? '  fixed active-menu opacity-100' : ' hidden inactive-menu opacity-0' } top-0 z-10 right-0  inactive-menu w-screen h-screen bg-black ` }> <div className="hi absolute w-16 h-20 md:w-28 md:h-32 flex justify-center items-center  bg-black">
        <MdClose onClick={ onClick } size={ '2.5em' } className={ 'cursor-pointer hover:text-primary transition-all' } />
      </div>
        <div className="flex flex-col justify-center gap-16 text-4xl items-center h-full  w-full">

          { menuElements.map( ( element ) => <MenuElement text={ element } /> ) }
        </div>


      </div>
    </>
  );
}
type MenuElementProps = { text : string }
const MenuElement : FC<MenuElementProps> = ( { text } ) =>
{
  return <div className=" cursor-pointer hover:text-primary transition-all text-white ">{ text }</div>
}



const useToggle = ( initialValue : boolean = false ) : [ boolean, () => void ] =>
{
  const [ value, setValue ] = useState( initialValue );

  // Define a function to toggle the state
  const toggle = useCallback( () =>
  {
    setValue( currentValue => !currentValue );
  }, [] );

  return [ value, toggle ];
};

export default useToggle;
