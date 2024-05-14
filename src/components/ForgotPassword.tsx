import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slice from "./assets/Slice.png";
import building from "./assets/building.jpg";
import {useNavigate} from 'react-router-dom'
import { EyeIcon, EyeSlashIcon, XCircleIcon } from "@heroicons/react/24/solid";


const ForgotPassword: React.FC = () => {
 



  const inputStyle = "w-full lg:max-w-[417px] lg:h-[56px] md:h-10  p-2 bg-gray-300 rounded-lg";
  return (
    <div className="flex flex-row">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cover bg-center relative">
        <img className="absolute inset-0 object-cover w-full h-screen lg:hidden z-0" src={building} alt="photo" />
        <div className="lg:max-w-[481px] md:max-w-sm max-w-xs w-full lg:mt-0  mt-20 bg-white bg-opacity-90 p-8 rounded-lg z-10 lg:m-0 m-10 relative ">
        
        <Link to="/login">
          <div className="lg:hidden block">
          <XCircleIcon className="text-black size-8 absolute right-4 top-4 mb-2 cursor-pointer"/>
          </div>
        </Link>
          <h1 className="text-2xl font-semibold text-center p-4 mt-4">Forgot your password?</h1>
          <p className="text-center p-4">We'll email you a secure link to reset the password for your account</p>
          <div className="px-6">
          <p className="mb-2">Email</p>
          <input type="text" className="w-full lg:max-w-[417px] lg:h-[56px] md:h-10  p-2 bg-gray-300 rounded-lg"/>
          </div>
          <div className="px-6 pt-4">
          <button className="bg-primary  text-white py-2 px-4 rounded-lg w-full lg:max-w-[417px] lg:h-[56px]  md:h-10">Send Link</button>
          <Link to="/registration">
            <div className="flex flex-row justify-center mt-[10px]">
              <p className="text-center italic lg:text-base text-sm">Don't have an account? </p>
              <p className="pl-2 italic font-bold text-primary underline  lg:text-base text-sm">Sign Up</p>
            </div>
          </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-1/2  items-center justify-center">
        <img className="object-cover h-screen w-full" src={Slice} alt="photo" />
      </div>
    </div>
  );
};

export default ForgotPassword;
