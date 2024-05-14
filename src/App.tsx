import React, { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { Outlet, useOutlet } from "react-router-dom";


interface AppProps {
  isdarkMode: boolean;
}
const App: React.FC<AppProps> = ({ isdarkMode }) => {
  const [darkMode, setDarkMode] = useState(isdarkMode);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`flex ${darkMode ? "dark" : "white"}`}>
      <div className="h-[100vh]">
        <Sidebar darkMode={darkMode} />
      </div>
      <div className="flex-1 flex flex-col">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className={`bg-${darkMode ? "black" : "gray"} flex-1`}>
          <Outlet></Outlet>
        </div>
        
      </div>
    </div>
  );
};

export default App;
