import React from "react";
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

function Navbar() {
  return (
    <div className="navbarContainer bg-overlay w-screen h-3/4 flex flex-col gap-7 mt-16 px-10">
      <div className="logoContainer bg-orange-300 w-fit flex flex-col justify-center gap-2">
        <img src="/images/logo.jpg" alt="logo" className="w-12 m-auto" />

        <div className="flex items-center justify-center">
          <p className="text">Subscribe</p>
          <ChevronRightIcon className="w-6 h-4" />
        </div>
      </div>

      <div className="optionContainer flex items-center justify-start gap-6  w-1/6">
        <UserIcon className="w-6 h-6" />
        <p className="heading  text-lg">My Space</p>
      </div>

      <div className="optionContainer flex items-center justify-start gap-6  w-1/6">
        <SearchIcon className="w-6 h-6" />
        <p className="heading text-lg">Explore</p>
      </div>

      <div className="optionContainer flex items-center justify-start gap-6  w-1/6">
        <HomeIcon className="w-6 h-6" />
        <p className="heading text-lg">Home</p>
      </div>

      <div className="optionContainer flex items-center justify-start gap-6  w-1/6">
        <DesktopComputerIcon className="w-6 h-6" />
        <p className="heading text-lg">TV</p>
      </div>

      <div className="optionContainer flex items-center justify-start gap-6  w-1/6">
        <VideoCameraIcon className="w-6 h-6" />
        <p className="heading text-lg">Movies</p>
      </div>

      <div className="optionContainer flex items-center justify-start gap-6  w-1/6">
        <PuzzleIcon className="w-6 h-6" />
        <p className="heading text-lg">Sports</p>
      </div>

      <div className="optionContainer flex items-center justify-start gap-6  w-1/6 ">
        <MenuIcon className="w-6 h-6" />
        <p className="heading text-lg">Categories</p>
      </div>
    </div>
  );
}

export default Navbar;
