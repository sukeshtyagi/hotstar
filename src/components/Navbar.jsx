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
    <div className="navbarContainer">
      <div className="logoContainer">
        <img src="/images/logo.jpg" alt="logo" />

        <div className="">
          <p className="text">Subscribe</p>
          <ChevronRightIcon className="w-6 h-6" />
        </div>
      </div>

      <div className="optionContainer">
        <UserIcon className="w-6 h-6" />
        <p className="heading"></p>
      </div>

      <div className="optionContainer">
        <SearchIcon className="w-6 h-6" />
        <p className="heading"></p>
      </div>

      <div className="optionContainer">
        <HomeIcon className="w-6 h-6" />
        <p className="heading"></p>
      </div>

      <div className="optionContainer">
        <DesktopComputerIcon className="w-6 h-6" />
        <p className="heading"></p>
      </div>

      <div className="optionContainer">
        <VideoCameraIcon className="w-6 h-6" />
        PuzzleIcon
        <p className="heading"></p>
      </div>

      <div className="optionContainer">
        <PuzzleIcon className="w-6 h-6" />
        <p className="heading"></p>
      </div>

      <div className="optionContainer">
        <MenuIcon className="w-6 h-6" />
        <p className="heading"></p>
      </div>
    </div>
  );
}

export default Navbar;
