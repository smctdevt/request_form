import React, { useState } from "react";
import { MoonIcon, SunIcon, ChevronDownIcon, BellIcon, ChevronUpIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Avatar from "./assets/avatar.png";

interface NavProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: string;
}

const Nav: React.FC<NavProps> = ({ darkMode, toggleDarkMode, currentPage }) => {
  const flexBetween = "flex items-center justify-between";
  const listProfile ="px-4 hover:bg-[#E0E0F9] cursor-pointer py-2";
  const listNotification ="px-4 hover:bg-[#E0E0F9] cursor-pointer  py-4 border-b flex items-center justify-between pr-10";
  const divNotification = "size-[28px] flex items-center justify-center bg-black rounded-full";
  const iconNotifcation ="size-[18px] text-white  cursor-pointer";
  const [isOpen, setIsOpen]= useState(false);
  const [isOpenNotif, setIsOpenNotif]= useState(false);


  return (
    
    <div className={`nav-container ${darkMode ? "dark" : "white"}`}> {/* Toggle light and dark mode */}
      
      <nav className={`${flexBetween} bg-white dark:bg-blackD`}>
        <div className="h-[67px] flex items-center bg-white  dark:bg-blackD">
          <h1 className={`text-[32px] font-bold text-primary ${darkMode ? "dark:text-white" : ""} pl-[22px]`}>{currentPage}</h1>
        </div>
        <div className="flex items-center justify-between pr-10">
          <div className="pr-8">
            {darkMode ?
                       <SunIcon className="size-[27px] text-white cursor-pointer" onClick={toggleDarkMode} />:
                       <MoonIcon className="size-[27px] text-black cursor-pointer" onClick={toggleDarkMode} />
            }
            </div>
          <div className={`${flexBetween} gap-4 relative`}>
            <img alt="logo" className="cursor-pointer" src={Avatar} height={45} width={45} onClick={() => setIsOpen(!isOpen)} />
            {/* USER NAME */}
            <p className="pl-2 lg:text-[18px] text-[12px] dark:text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Kylie Doe</p>
            {!isOpen ? (
            <ChevronDownIcon className="size-[25px] text-black dark:text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
          ):(
            <ChevronUpIcon className="size-[25px] text-black dark:text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          )}
           {/* Profile dropdown */}
          {isOpen && (
            <div className="w-48   bg-white absolute top-11 ">
              <ul>
                <li className={`${listProfile}`}>My Profile</li>
                <li className={`${listProfile}`}>Settings</li>
               
                <li className={`${listProfile}`}>Help</li>
                <li className={`${listProfile}`}>Sign out</li>
              </ul>
            </div>
          )}
          </div>
          <div className="pl-10 relative">
            <BellIcon className={`size-[30px]  cursor-pointer ${isOpenNotif ? "text-yellow" : "text-gray-400" } `} onClick={() => setIsOpenNotif(!isOpenNotif)} />
             {/* Notification */}
            {isOpenNotif && (
            <div className="w-96  -right-10   bg-white absolute top-11 border-2 border-black z-40 ">
              <ul>
                <li className={`${listNotification}`}>
                <div className={`${divNotification}`}>
                <EnvelopeIcon className={`${iconNotifcation}`}/>
                </div>
                <div>
                  <p className="text-primary">
                    New request from Head Office
                  </p>
                  <p className="text-gray-400 px-10">
                  Apr 14, 2024 9:35am
                  </p>
                </div>
                </li>
                <li className={`${listNotification}`}>
                <div className={`${divNotification}`}>
                <EnvelopeIcon className={`${iconNotifcation}`}/>
                </div>
                <div>
                <div>
                  <p className="text-primary">
                    New request from SMCT Loay
                  </p>
                  <p className="text-gray-400 px-10">
                  Mar 14, 2024 1:35pm
                  </p>
                </div>
                </div>
                </li>
               
                <li className={`${listNotification}`}>
                 <div className={`${divNotification}`}>
                 <EnvelopeIcon className={`${iconNotifcation}`}/>
                 </div>
                 <div>
                  <p className="text-primary">
                    New request from DSM Ubay
                  </p>
                  <p className="text-gray-400 px-10">
                    Jul 2, 2024 10:45am
                  </p>
                </div>
                 </li>
                <li className={`${listNotification}`}>
                <div className={`${divNotification}`}>
                <EnvelopeIcon className={`${iconNotifcation}`}/>
                </div>
                <div>
                  <p className="text-primary">
                    New request from SMCT Alicia
                  </p>
                  <p className="text-gray-400 px-10">
                  May 5, 2024 2:35am
                  </p>
                </div>
                </li>
              </ul>
            </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
