import React from "react";
import { MoonIcon, SunIcon, ChevronDownIcon, BellIcon } from "@heroicons/react/24/solid";
import Avatar from "./assets/avatar.png";

interface NavProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Nav: React.FC<NavProps> = ({ darkMode, toggleDarkMode }) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <div className={`nav-container ${darkMode ? "dark" : "white"}`}>
      <nav className={`${flexBetween} bg-white dark:bg-blackD`}>
        <div className="h-[67px] flex items-center bg-white  dark:bg-blackD">
          <h1 className={`text-[32px] font-bold text-primary ${darkMode ? "dark:text-white" : ""} pl-[22px]`}>Dashboard</h1>
        </div>
        <div className="flex items-center justify-between pr-10">
          <div className="pr-8">
            {darkMode ?
                       <SunIcon className="size-[27px] text-white cursor-pointer" onClick={toggleDarkMode} />:
                       <MoonIcon className="size-[27px] text-black cursor-pointer" onClick={toggleDarkMode} />

            
            }
            </div>
          <div className={`${flexBetween} gap-4`}>
            <img alt="logo" src={Avatar} height={45} width={45} />
            <p className="pl-2 text-[18px] dark:text-white">Kylie Doe</p>
            <ChevronDownIcon className="size-[25px] text-black dark:text-white" />
          </div>
          <div className="pl-10">
            <BellIcon className="size-[30px] text-gray-400" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
