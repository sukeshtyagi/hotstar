import React, { useState } from "react";
import {
  ChevronRightIcon,
  UserIcon,
  SearchIcon,
  HomeIcon,
  DesktopComputerIcon,
  VideoCameraIcon,
  PuzzleIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function HorizontalNavbar() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`overallContainer box-border w-screen py-6 transition-all duration-300 text-slate-400 caret-transparent flex gap-0 justify-between items-start ${
        isHovered ? "h-screen bg-overlay" : "h-20 bg-black"
      }`}
    >
      <div className="logoContainer box-border flex flex-col ">
        <img
          src="/images/logo.jpg"
          alt="logo"
          className="w-16 h-14 cursor-pointer"
          onClick={() => {
            navigate("/paywall");
          }}
          style={{ caretColor: "transparent" }}
        />
        <div
          className="subscribeDiv flex items-center text-yellow-300 cursor-pointer"
          onClick={() => {
            navigate("/paywall");
          }}
        >
          <p className="box-border text-sm -mt-3">Subscribe</p>
          <ChevronRightIcon className="w-5 h-4 -mt-3" />
        </div>
      </div>

      <div
        className="navOptionsContainer box-border w-full h-fit flex justify-evenly items-center mt-5"
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="optionDiv box-border w-full h-fit hover:text-slate-50 transition-all duration-300 "
          onClick={() => {
            navigate("/mypage");
          }}
        >
          <UserIcon
            className="w-6 h-6 cursor-pointer mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/mypage");
            }}
          />
        </div>

        <div
          className="optionDiv box-border w-full h-fit hover:text-slate-50 transition-all duration-300 "
          onClick={() => {
            navigate("/explore");
          }}
        >
          <SearchIcon
            className="w-6 h-6 cursor-pointer mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/explore");
            }}
          />
        </div>

        <div
          className="optionDiv box-border w-full h-fit hover:text-slate-50 transition-all duration-300 "
          onClick={() => {
            navigate("/home");
          }}
        >
          <HomeIcon
            className="w-6 h-6 cursor-pointer mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>

        <div
          className="optionDiv box-border w-full h-fit hover:text-slate-50 transition-all duration-300 "
          onClick={() => {
            navigate("/shows");
          }}
        >
          <DesktopComputerIcon
            className="w-6 h-6 cursor-pointer mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/shows");
            }}
          />
        </div>

        <div
          className="optionDiv box-border w-full h-fit hover:text-slate-50 transition-all duration-300 "
          onClick={() => {
            navigate("/movies");
          }}
        >
          <VideoCameraIcon
            className="w-6 h-6 cursor-pointer mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/movies");
            }}
          />
        </div>

        <div
          className="optionDiv box-border w-full h-fit hover:text-slate-50 transition-all duration-300 "
          onClick={() => {
            navigate("/sports");
          }}
        >
          <PuzzleIcon
            className="w-6 h-6 cursor-pointer mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/sports");
            }}
          />
        </div>

        <div
          className="optionDiv box-border w-full h-fit hover:text-slate-50 transition-all duration-300 "
          onClick={() => {
            navigate("/categories");
          }}
        >
          <MenuIcon
            className="w-6 h-6 cursor-pointer mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/categories");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HorizontalNavbar;

/*
    <p
      className={`heading text-[10px] text-center text-yellow-500 font-medium cursor-pointer "
      }`}
      onClick={() => {
        navigate("/categories");
      }}
    >
      Categories
    </p>
*/
