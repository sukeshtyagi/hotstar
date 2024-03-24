import React, { useState, useEffect } from "react";
import Navbar from "../sharedComponents/Navbar";
import PopularShows from "../homePageComponents/PopularShows";
import NewReleases from "../homePageComponents/NewReleases";
import TopRated from "../homePageComponents/TopRated";
import TVShows from "../homePageComponents/TVShows";
import Movies from "../homePageComponents/Movies";
import WebSeries from "../homePageComponents/WebSeries";
import { CogIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import Footer from "../sharedComponents/Footer";
function Mypage() {
  const navigate = useNavigate();

  const components = [
    { component: <PopularShows key="PopularShows" />, name: "PopularShows" },
    { component: <NewReleases key="NewReleases" />, name: "NewReleases" },
    { component: <TopRated key="TopRated" />, name: "TopRated" },
    { component: <TVShows key="TV" />, name: "TVShows" },
    { component: <Movies key="movies" />, name: "movies" },
    { component: <WebSeries key="WebSeries" />, name: "WebSeries" },
  ];

  const [maskedMobNumber, setMaskedMobNumber] = useState("");

  useEffect(() => {
    const mobNumber = localStorage.getItem("mobNumber");
    if (mobNumber) {
      const indexesToMask = [6, 7, 8, 9, 10];
      const maskedNumber = maskMobileNumber(mobNumber, indexesToMask);
      setMaskedMobNumber(maskedNumber);
    }
  }, []);

  const maskMobileNumber = (mobNumber, indexesToMask) => {
    const mobArray = mobNumber.split("");

    indexesToMask.forEach((index) => {
      if (index >= 0 && index < mobArray.length) {
        mobArray[index] = "#";
      }
    });

    return mobArray.join("");
  };

  return (
    <div className="mypageContainer box-border w-screen  flex bg-black overflow-y-atuo ">
      <div className="leftDiv box-border fixed top-0 left-0 z-100">
        <Navbar />
      </div>
      <div className="rightDiv box-border w-10/12 flex flex-col m-auto ml-44">
        <div className="header box-border w-full h-full caret-transparent	flex justify-between items-center mt-14">
          <div className="leftDiv box-border">
            <p className="line1 box-border text-zinc-300 text-2xl font-semibold flex justify-start items-center gap-2 p-2 tracking-wide">
              Subsribe to enjoy Disney+ Hotstar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </p>
            <p className="mobNumber text-white text-zinc-100 text-xl font-semibold flex items-center">
              {maskedMobNumber}
            </p>
          </div>
          <div className="headerRightDiv box-border w-1/2 h-fit flex flex-col items-start text-slate-100  ">
            <div className="btnDiv box-border w-full h-fit flex justify-end gap-6 items-center">
              <button
                className="btnDiv box-border w-1/3  p-2 py-4 text-lg
              bg-gradient-to-r from-blue-700 from-40% to-blue-900 to-90% text-xl font-semibold 
              hover:from-blue-700 from-40% 
              hover:to-blue-950 to-80%
              tracking-wide rounded-xl"
                onClick={() => {
                  navigate("/paywall");
                }}
              >
                Subscribe
              </button>
              <button
                className="btnDiv box-border w-2/5 h- flex items-center justift-start gap-5 p-2 py-4 rounded-xl text-lg
              bg-zinc-600 hover:bg-zinc-500 text-xl font-semibold tracking-wide"
                onClick={() => {
                  navigate("/help");
                }}
              >
                <CogIcon className="h-6 w-8 text-slate-100" />
                Help & Settings
              </button>
            </div>
            <p className="line box-border w-3/5  p-2 px-5 text-lg text-left m-auto text-zinc-400">
              Plans starts at ₹149
            </p>
          </div>
        </div>
        {components.map((componentObj, index) => (
          <div
            key={index}
            className="contentDiv box-border w-full h-full flex flex-col gap-2 mt-8 z-0"
          >
            {componentObj.component}
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default Mypage;
