import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useLanguage } from "../../Hooks/useLanguage";
import { LanguageType } from "../../Hooks/LanguageProvider";
function classNames ( ...classes : ( string | undefined | null | false )[] ) : string
{
  return classes.filter( Boolean ).join( " " );
}

// TODO: I will have to useContext instead of useState in the future of course
export function Language ()
{
  const { language, setLanguage } = useLanguage();

  return (
    <Menu
      as="div"
      className="relative  flex items-center justify-center text-end"
    >
      <Menu.Button className="cursor-pointer  items-center justify-start flex h-1  outline-none relative    text-[2rem] transition-all  w-1 text-gray-300 hover:text-white text-sans ">
        { language }
      </Menu.Button>

      <Transition
        as={ Fragment }
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -top-4 right-0 z-10 mt-20 w-40 origin-top-right shadow-lg rounded-lg text-white backdrop-blur-md">
          { [ "EN", "FR", "DE", "IT" ].map( ( lang ) => (
            <Menu.Item key={ lang }>
              { ( { active } ) => (
                <a
                  href="#"
                  onClick={ () =>
                  {
                    if ( typeof lang === 'string' && [ "EN", "FR", "DE", "IT" ].includes( lang ) )
                    {
                      setLanguage( lang as LanguageType );
                    }
                  } }
                  className={ classNames(
                    active ? "text-white" : "text-gray-300",
                    "text-3xl block px-8 py-4",
                  ) }
                >
                  { lang }
                </a>
              ) }
            </Menu.Item>
          ) ) }
        </Menu.Items>

      </Transition>
    </Menu>
  );
}
