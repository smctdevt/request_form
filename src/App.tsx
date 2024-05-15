import React, { useState, useEffect} from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Outlet, useOutlet } from "react-router-dom";

interface AppProps {
  isdarkMode: boolean;
}
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const App: React.FC<AppProps> = ({ isdarkMode }) => {
  const [darkMode, setDarkMode] = useState(isdarkMode);
  const location = useLocation();
  const currentPage = capitalizeFirstLetter(location.pathname.substring(1));
 
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
 

  return (
    <div className={`flex ${darkMode ? "dark" : "white"}`}>
      <div className="h-[100vh]">
        <Sidebar darkMode={darkMode} />
      </div>
      <div className="flex-1 flex flex-col">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentPage={currentPage} />
        <div className={`bg-${darkMode ? "black" : "gray"} flex-1`}>
          <Outlet></Outlet>
        </div>
        
      </div>
    </div>
  );
};

export default App;
