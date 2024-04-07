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
    <div className="headerContainer box-border w-full xsbp:w-4/5 sbp:3/4 m-auto py-2 rounded-xl flex flex-wrap justify-between items-center sticky top-0 left-0  bg-black font-serif">
      <div className="leftDiv box-border ml-2 flex justify-start gap-0 items-center p-0 ">
        <XIcon
          className="box-border w-4 m-0 text-white relative top-px"
          onClick={() => {
            navigate("/home");  
          }}
        />
        <img src="/images/logo.jpg" alt="" className="box-border w-12 " />
      </div>

      <div className="rightDiv box-border h-auto mr-1 flex flex-wrap justify-start items-center gap-2">
        <div
          className="languageDiv box-border px-2  py-px flex justify-center items-center gap-1 border border-green-500 rounded-lg cursor-pointer bg-gradient-to-r from-blue-500 via-yellow-500 to-red-200"
          onClick={toggleDropdown}
        >
          <p className="box-border text-white text-lg">{languageSelected}</p>
          <ChevronDownIcon className="box-border w-4 text-white" />
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

        <div className="languageDiv box-border px-3 py-px flex justify-center items-center gap-1 border border-green-500 rounded-lg cursor-pointer bg-gradient-to-r from-blue-500 via-purple-900 to-red-500">
          <button
            className="login text-white text-lg"
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
