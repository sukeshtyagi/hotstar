import React, { useState } from "react";
import { ChevronDownIcon, XIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [languageSelected, setLanguageSelected] = useState("English");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="headerContainer w-11/12 m-auto box-border flex justify-between items-center">
      <div className="leftDiv box-border flex justify-start gap-4 items-center">
        <XIcon
          className="box-border w-12 text-white relative top-1"
          onClick={() => {
            navigate("/home");
          }}
        />
        <img src="/images/logo.jpg" alt="" className="box-border w-44 h-28" />
      </div>
      <div className="rightDiv box-border flex justify-start items-center gap-4">
        <div
          className="languageDiv w-48 h-12 box-border flex justify-center gap-2 items-center border rounded-xl cursor-pointer bg-gradient-to-r from-blue-500 via-yellow-500 to-red-200"
          onClick={toggleDropdown}
        >
          <p className="text-white text-xl font-bold">{languageSelected}</p>
          <ChevronDownIcon className="box-border w-6 text-white" />
        </div>

        {isDropdownOpen && (
          <div className="absolute top-20 right-68 w-48 bg-black border border-4 border-zinc-500 rounded-md p-2 text-center flex flex-col gap-1 cursor-pointer">
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-900 to-red-500 text-white text-xl font-bold border border-green-500 border-2 rounded-2xl"
              onClick={() => {
                setLanguageSelected("Hindi");
                toggleDropdown();
              }}
            >
              Hindi
            </div>
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-900 to-red-500 text-white text-xl font-bold border border-green-500 border-2 rounded-2xl"
              onClick={() => {
                setLanguageSelected("Haryanavi");
                toggleDropdown();
              }}
            >
              Haryanavi
            </div>
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-900 to-red-500 text-white text-xl font-bold border border-green-500 border-2 rounded-2xl"
              onClick={() => {
                setLanguageSelected("Punjabi");
                toggleDropdown();
              }}
            >
              Punjabi
            </div>
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-900 to-red-500 text-white text-xl font-bold border border-green-500 border-2 rounded-2xl"
              onClick={() => {
                setLanguageSelected("Tamil");
                toggleDropdown();
              }}
            >
              Tamil
            </div>
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-900 to-red-500 text-white text-xl font-bold border border-green-500 border-2 rounded-2xl"
              onClick={() => {
                setLanguageSelected("Kannad");
                toggleDropdown();
              }}
            >
              Kannad
            </div>
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-900 to-red-500 text-white text-xl font-bold border border-green-500 border-2 rounded-2xl"
              onClick={() => {
                setLanguageSelected("Malyalam");
                toggleDropdown();
              }}
            >
              Malyalam
            </div>
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-900 to-red-500 text-white text-xl font-bold border border-green-500 border-2 rounded-2xl"
              onClick={() => {
                setLanguageSelected("Bhojpuri");
                toggleDropdown();
              }}
            >
              Bhojpuri
            </div>
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-900 to-red-500 text-white text-xl font-bold border border-green-500 border-2 rounded-2xl"
              onClick={() => {
                setLanguageSelected("Bengali");
                toggleDropdown();
              }}
            >
              Bengali
            </div>
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-900 to-red-500 text-white text-xl font-bold border border-green-500 border-2 rounded-2xl"
              onClick={() => {
                setLanguageSelected("English");
                toggleDropdown();
              }}
            >
              English
            </div>
          </div>
        )}

        <div className="loginDiv w-48 h-12 box-border flex justify-center items-center rounded-xl px-8 bg-gradient-to-r from-blue-500 via-purple-900 to-red-500">
          <button
            className="login text-white text-xl font-bold"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
