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
      className={`overallContainer box-border w-fit h-screen pt-20 pl-10 transition-all duration-300 text-slate-400 caret-transparent ${
        isHovered ? "w-screen bg-overlay " : "bg-transparent"
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
          style={{ caretColor: "transparent" }}
        />
        <div
          className="subscribeDiv flex items-center text-yellow-300 cursor-pointer"
          onClick={() => {
            navigate("/paywall");
          }}
        >
          <p className="text-sm ">Subscribe</p>
          <ChevronRightIcon className="w-5 h-4" />
        </div>
      </div>

      <div
        className="navOptionsContainer box-border w-fit h-4/6 mt-9 flex flex-col items-start gap-8 px-3"
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="optionDiv box-border w-full h-6 flex items-center gap-8 hover:text-slate-50 transition-all duration-300 "
          onClick={() => {
            navigate("/mypage");
          }}
        >
          <UserIcon
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/mypage");
            }}
          />

          <p
            className={`heading text-2xl font-medium cursor-pointer ${
              isHovered ? "flex" : "hidden"
            }`}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
            onClick={() => {
              navigate("/mypage");
            }}
          >
            My Space
          </p>
        </div>

        <div className="optionDiv box-border w-full h-6 flex items-center gap-8 hover:text-slate-50 transition-all duration-300 ">
          <SearchIcon
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/explore");
            }}
          />

          <p
            className="heading text-2xl font-medium cursor-pointer"
            onClick={() => {
              navigate("/explore");
            }}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            Explore
          </p>
        </div>

        <div className="optionDiv box-border w-full h-6 flex items-center gap-8 hover:text-slate-50 transition-all duration-300 ">
          <HomeIcon
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/home");
            }}
          />

          <p
            className="heading text-2xl font-medium cursor-pointer"
            onClick={() => {
              navigate("/home");
            }}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            Home
          </p>
        </div>

        <div className="optionDiv box-border w-full h-6 flex items-center gap-8 hover:text-slate-50 transition-all duration-300 ">
          <DesktopComputerIcon
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/shows");
            }}
          />

          <p
            className="heading text-2xl font-medium cursor-pointer"
            onClick={() => {
              navigate("/shows");
            }}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            TV
          </p>
        </div>

        <div className="optionDiv box-border w-full h-6 flex items-center gap-8 hover:text-slate-50 transition-all duration-300 ">
          <VideoCameraIcon
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/movies");
            }}
          />

          <p
            className="heading text-2xl font-medium cursor-pointer"
            onClick={() => {
              navigate("/movies");
            }}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            Movies
          </p>
        </div>

        <div className="optionDiv box-border w-full h-6 flex items-center gap-8 hover:text-slate-50 transition-all duration-300 ">
          <PuzzleIcon
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/sports");
            }}
          />

          <p
            className="heading text-2xl font-medium cursor-pointer"
            onClick={() => {
              navigate("/sports");
            }}
            style={{ visibility: isHovered ? "visible" : "hidden" }}
          >
            Sports
          </p>
        </div>

        <div className="optionDiv box-border w-full h-6 flex items-center gap-8 hover:text-slate-50 transition-all duration-300 ">
          <MenuIcon
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => {
              navigate("/categories");
            }}
          />

          <p
            className="heading text-2xl font-medium cursor-pointer"
            onClick={() => {
              navigate("/categories");
            }}
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
