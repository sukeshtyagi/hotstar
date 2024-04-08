import React, { useState, useEffect } from "react";
import PopularShows from "../homePageComponents/PopularShows";
import NewReleases from "../homePageComponents/NewReleases";
import TopRated from "../homePageComponents/TopRated";
import TVShows from "../homePageComponents/TVShows";
import Movies from "../homePageComponents/Movies";
import WebSeries from "../homePageComponents/WebSeries";
import { CogIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import Footer from "../sharedComponents/Footer";
import VerticalNavbar from "../sharedComponents/VerticalNavbar";
import HorizontalNavbar from "../sharedComponents/HorizontalNavbar";
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
    <div className="mypageContainer box-border w-screen flex overflow-y-atuo bg-black">
      <div className="leftDivVerticalNavbar box-border fixed top-0 left-0 z-20 hidden sbp:block bg-black">
        <VerticalNavbar />
      </div>

      <div className="leftDivHorizontalNavbar box-border fixed top-0 left-0 mb-4 z-20 block sbp:hidden">
        <HorizontalNavbar />
      </div>

      <div className="rightDiv box-border w-4/5 mx-auto mt-28 sbp:ml-60 sbp:mr-2 sbp:mt-20 h-full flex flex-col justify-start gap-0 z-0">
        
        <div className="header box-border w-full h-full caret-transparent	flex flex-wrap justify-between items-start sbp:mt-8">
          <div className="headerLeftDiv box-border w-fit">
            <p className="line1 box-border w-fit text-zinc-300 text-lg font-semibold flex justify-start items-center gap-1 px-1">
              Subsribe to enjoy Disney+ Hotstar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="w-5 h-5 text-red-300"
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

          <div className="headerRightDiv box-border w-fit h-fit mr-4 flex flex-col items-start text-slate-100">
            <div className="btnDiv box-border w-full h-fit flex flex-wrap justify-end gap-0 items-center">
              <button
                className="btnDiv box-border px-4 py-1.5 text-lg
              bg-gradient-to-r from-blue-700 from-40% to-blue-900 to-90% font-semibold hover:from-blue-700 from-40% hover:to-blue-950 to-80% rounded-xl"
                onClick={() => {
                  navigate("/paywall");
                }}
              >
                Subscribe
              </button>
              <button
                className="btnDiv box-border flex items-center justift-start gap-1 px-4 py-2 rounded-xl text-base
              bg-zinc-600 hover:bg-zinc-500 font-semibold "
                onClick={() => {
                  navigate("/help");
                }}
              >
                <CogIcon className="h-6 w-8 text-slate-100" />
                Help & Settings
              </button>
            </div>
            <p className="line box-border w-full p-2 text-base text-left m-auto text-zinc-400">
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
        <div className="footerDiv box-border w-full h-fit mt-8 z-0 border-t-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Mypage;
