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

function Navbar() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`overallContainer box-border w-screen h-screen pt-20 px-10 transition-all duration-300 ${
        isHovered ? "bg-gradient-to-r from-overlay" : "bg-transparent"
      }`}
    >
      <div className="logoContainer box-border w-fit h-fit">
        <img
          src="/images/logo.jpg"
          alt="logo"
          className="w-16 pb-4 cursor-pointer"
          onClick={() => {
            navigate("/paywall");
          }}
        />
        <div
          className="subscribeDiv flex items-center text-yellow-300 cursor-pointer"
          onClick={() => {
            navigate("/paywall");
          }}
        >
          <p className="text-lg ">Subscribe</p>
          <ChevronRightIcon className="w-6 h-5" />
        </div>
      </div>

      <div
        className="navOptionsContainer box-border w-1/6 h-4/6 mt-9 flex flex-col items-start gap-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="optionDiv box-border w-full h-6 flex items-center gap-4 hover:text-slate-50 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => {
            navigate("/mypage");
          }}
        >
          <UserIcon className="w-6 h-6" />

          <p
            className={`heading text-lg ${isHovered ? "flex" : "hidden"}`}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            My Space
          </p>
        </div>

        <div
          className="optionDiv box-border w-full h-6 flex items-center gap-4 hover:text-slate-50 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => {
            navigate("/explore");
          }}
        >
          <SearchIcon className="w-6 h-6" />

          <p
            className={`heading text-lg ${isHovered ? "flex" : "hidden"}`}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            Explore
          </p>
        </div>

        <div
          className="optionDiv box-border w-full h-6 flex items-center gap-4 hover:text-slate-50 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => {
            navigate("/home");
          }}
        >
          <HomeIcon className="w-6 h-6" />

          <p
            className={`heading text-lg ${isHovered ? "flex" : "hidden"}`}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            Home
          </p>
        </div>

        <div
          className="optionDiv box-border w-full h-6 flex items-center gap-4 hover:text-slate-50 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => {
            navigate("/shows");
          }}
        >
          <DesktopComputerIcon className="w-6 h-6" />

          <p
            className={`heading text-lg ${isHovered ? "flex" : "hidden"}`}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            TV
          </p>
        </div>

        <div
          className="optionDiv box-border w-full h-6 flex items-center gap-4 hover:text-slate-50 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => {
            navigate("/movies");
          }}
        >
          <VideoCameraIcon className="w-6 h-6" />

          <p
            className={`heading text-lg ${isHovered ? "flex" : "hidden"}`}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            Movies
          </p>
        </div>

        <div
          className="optionDiv box-border w-full h-6 flex items-center gap-4 hover:text-slate-50 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => {
            navigate("/sports");
          }}
        >
          <PuzzleIcon className="w-6 h-6" />

          <p
            className={`heading text-lg ${isHovered ? "flex" : "hidden"}`}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            Sports
          </p>
        </div>

        <div
          className="optionDiv box-border w-full h-6 flex items-center gap-4 hover:text-slate-50 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => {
            navigate("/categories");
          }}
        >
          <MenuIcon className="w-6 h-6" />

          <p
            className={`heading text-lg ${isHovered ? "flex" : "hidden"}`}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            Categories
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
