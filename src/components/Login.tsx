import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slice from "./assets/Slice.png";
import building from "./assets/building.jpg";
import {useNavigate} from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

interface UserCredentials {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (credentials.email === "user@test.com" && credentials.password === "123") {
      alert("Login successful!");
      navigate ("/dashboard");
    } else {
      alert("Incorrect email or password. Please try again.");
      
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof UserCredentials) => {
    setCredentials({
      ...credentials,
      [field]: e.target.value,
    });
  };
  const inputStyle = "w-full lg:max-w-[417px] lg:h-[56px] md:h-10  p-2 bg-gray-300 rounded-lg";
  return (
    <div className="flex flex-row">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cover bg-center relative">
        <img className="absolute inset-0 object-cover w-full h-screen lg:hidden z-0" src={building} alt="photo" />
      
        <div className="lg:max-w-[481px] md:max-w-sm max-w-xs w-full lg:mt-0  mt-20 bg-white bg-opacity-90 p-8 rounded-lg z-10 lg:m-0 m-10 ">
          <h1 className="text-primary font-bold lg:text-[32px] md:text-2xl  mb-6 text-left lg:mt-0 ">
            ACCOUNT LOGIN
          </h1>
          <div className="mb-4">
            <h1 className="lg:text-lg text-base mb-2">Email</h1>
            <input
              type="text"
              placeholder="Enter Email"
              className={`${inputStyle}`}
              value={credentials.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
        
          </div>
          <div className="mb-4">
            <h1 className="lg:text-lg text-base mb-2">Password</h1>
            <div className=" flex justify-center items-center relative w-full ">
            <input
             type={
                        showPassword ? "text" : "password"
                    }
              placeholder="Enter password"
              className={`${inputStyle}`}
              value={credentials.password}
              onChange={(e) => handleInputChange(e, "password")}
              
            />
            {showPassword?
              <EyeSlashIcon className="size-[24px] absolute right-3 cursor-pointer " onClick={() => setShowPassword(!showPassword)}  />
             :
            
             <EyeIcon className="size-[24px] absolute right-3 cursor-pointer " onClick={() => setShowPassword(!showPassword)}  />
            }
            </div>
            <Link to="/forgotpassword">
            <p className="text-right font-medium lg:text-base text-xs mt-[12px] mb-[20px] cursor-pointer">
              Forgot Password
            </p>
            </Link>
          </div>
          <button
            className="bg-primary  text-white py-2 px-4 rounded-lg w-full lg:max-w-[417px] lg:h-[56px]  md:h-10 "
            onClick={handleLogin}
          >
            Log In
          </button>
          <Link to="/registration">
            <div className="flex flex-row justify-center mt-[10px]">
              <p className="text-center italic lg:text-base text-sm">Don't have an account? </p>
              <p className="pl-2 italic font-bold text-primary underline  lg:text-base text-sm">Sign Up</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block w-1/2  items-center justify-center">
        <img className="object-cover h-screen w-full" src={Slice} alt="photo" />
      </div>
    </div>
  );
};

export default Login;
