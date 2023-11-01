import { Menu, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// TODO: I will have to useContext instead of useState in the future of course
export function Language() {
  const [language, setLanguage] = useState("EN");

  return (
    <Menu as="div" className="relative   inline-block text-center">
      <Menu.Button className="cursor-pointer  outline-none relative pt-8 -translate-y-1 text-[2rem] transition-all  text-gray-300 hover:text-white text-sans text-center">
        {language}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-8 w-40 origin-top-right shadow-lg rounded-lg text-white backdrop-blur-md">
          {" "}
          {/* Adjusted styling here */}
          {["EN", "FR", "DE"].map((lang) => (
            <Menu.Item key={lang}>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => {
                    setLanguage(lang);
                  }}
                  className={classNames(
                    active ? " text-white " : "text-gray-300",
                    "text-3xl block px-8 py-4",
                  )}
                >
                  {lang}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
