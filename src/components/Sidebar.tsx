import React, { useState, useEffect } from "react";
import Logo from "./assets/logo.png";
import {
  ChartBarIcon,
  EnvelopeIcon,
  BeakerIcon,
  ArrowLeftStartOnRectangleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";

type NavItem = {
  id: number;
  name: string;
  icon: React.ElementType;
};

interface SidebarProps {
  darkMode: boolean;
}

type Props = {};

const listStyle =
  "group flex ml-2 items-center text-[18px] text-gray-400 font-medium py-2 px-2 gap-2  overflow-hidden cursor-pointer  rounded-lg";
const pStyle = "group-hover:text-primary  font text-[20px]";
const iconStyle = "size-[32px] group-hover:text-primary ";

const navItems: NavItem[] = [
  { id: 1, name: "Dashboard", icon: ChartBarIcon },
  { id: 2, name: "Request", icon: EnvelopeIcon },
  { id: 3, name: "Setup", icon: BeakerIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ darkMode }) => {
  const [open, setOpen] = useState(window.innerWidth > 1024);


  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    const handleResize = () => {
      setOpen(window.innerWidth > 768);
    };
  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <div
        className={`bg-white dark:bg-blackD h-screen ${
          open ? "w-[240px]" : "w-20"
        } relative `}
      >
        <div className="px-2 py-3 h-[68px] flex justify-between items-center border-b-[0.5px] border-gray">
          <img
            src={Logo}
            height={34}
            width={75}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <h1
            className={`text-primary font-bold overflow-hidden mr-7 ${
              !open && "scale-0"
            } duration-500`}
          >
            Request Form
          </h1>
          <ArrowLeftCircleIcon
            className={`size-[34px] text-black dark:text-white -right-2 ml-2 absolute cursor-pointer ${
              !open && "hidden"
            }`}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="flex">
          <ul className="mt-[65px] h-5/6">
            <p className="text-[12px] text-gray-400 px-3">MENU</p>
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`${listStyle}  ${!open ? "" : "hover:bg-[#E0E0F9]"}`}
              >
                <div
                  className={`p-2 inline-block ${
                    !open ? "hover:bg-[#E0E0F9] rounded-lg" : ""
                  }`}
                >
                  <item.icon className={iconStyle} />
                </div>
                <p className={`${pStyle} ${!open && "scale-0"}`}>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t flex px-6 bottom-2 absolute justify-center items-center ">
          <div className=" flex  h-5/6 p-2">
            <ArrowLeftStartOnRectangleIcon className={`${iconStyle}`} />
          </div>
          <p className={`${pStyle} ${!open ? "hidden" : ""}`}>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
