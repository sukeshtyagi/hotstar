import React, { useState } from "react";
import Header from "./Header";
import Footer from "../sharedComponents/Footer";
import { CheckIcon, XIcon, ChevronRightIcon } from "@heroicons/react/outline";
import PlanDurationCost from "./PlanDurationCost";
import { useNavigate } from "react-router-dom";

function Paywall() {
  const navigate = useNavigate();
  // const mobilePlanSelected = localStorage.getItem(key)

  return (
    <div className="outerContainer w-screen bg-gray-900">
      <div className="paywall box-border bg-black w-full sm:w-[610px] mx-auto h-fit overflow-x-hidden">
        <div className="headerDiv border-box w-full bg-black">
          <Header />
        </div>

        <div className="mainBody box-border w-full h-fit flex flex-col items-center gap-20 font-serif border-y-2 border-blue-500">
          <div className="leftDiv box-border w-full mt-20">
            <h1 className="box-border w-full px-2 py-2 mb-4 text-emerald-500 text-2xl text-center font-semibold leading-normal">
              Subscribe now <span className="text-yellow-500">and </span>
              <span className="text-purple-500">start streaming</span>
            </h1>
            {/*mobilePlanSelected && (
            <p className="box-border h-fit w-3/4 text-yellow-200 text-2xl text-left p-4 m-auto">
              You will be able to watch only on mobile app
            </p>
          )*/}
          </div>
          <div className="rightDiv  box-border w-full h-fit p-2 font-white flex flex-col gap-20 overflow-x-hidden">
            <div className="planContainer box-border w-full h-full grid grid-cols-[3.5fr,1fr,1fr,1fr] gap-6 bg-black text-white text-sm font-serif items-center justify-items-center">
              <div className="item"></div>
              <div className="item box-border font-bold text-base">Mobile</div>
              <div className="item box-border font-bold text-base">Super</div>
              <div className="item box-border font-bold text-base">Premium</div>

              <div className="item box-border text-right justify-self-end pr-2">
                <p>All content </p>
                <p className="item box-border text-slate-500 justify-self-end">
                  Movies,Live Sports,TV,Specials
                </p>
              </div>

              <div className="item box-border">
                <CheckIcon className="h-6 text-green-500 justify-items-center" />
              </div>
              <div className="item">
                <CheckIcon className="h-6 text-green-500 justify-items-center" />
              </div>
              <div className="item text-center	">
                <CheckIcon className="h-6 text-green-500 text-center" />
              </div>

              <div className="item box-border text-right justify-self-end">
                Watch on Tv or Laptop
              </div>
              <div className="item">
                <XIcon className="h-5 text-red-500" />
              </div>
              <div className="item">
                <CheckIcon className="h-6 text-green-500" />
              </div>
              <div className="item">
                <CheckIcon className="h-6 text-green-500" />
              </div>

              <div className="item box-border pr-2 text-right justify-self-end">
                Add free movies & shoes(except sports)
              </div>
              <div className="item">
                <XIcon className="h-6 text-red-500" />
              </div>
              <div className="item">
                <XIcon className="h-6 text-red-500" />
              </div>
              <div className="item">
                <CheckIcon className="h-6 text-green-500" />
              </div>

              <div className="item box-border pr-2 text-right justify-self-end">
                Number of devices that can be logged in
              </div>
              <div className="item text-xl">1</div>
              <div className="item text-xl">2</div>
              <div className="item text-xl">4</div>

              <div className="item box-border pr-2 text-right justify-self-end">
                Max video quality
              </div>
              <div className="item">
                <p className="text-center text-base">HD</p>
                <p className="text-center text-base">720p</p>
              </div>
              <div className="item">
                <p className="text-center text-xl">Full HD</p>
                <p className="text-center text-xl">1080p</p>
              </div>
              <div className="item">
                <p className="text-center text-xl">4k</p>
                <p className="text-center text-xl">2160p</p>
              </div>

              <div className="item box-border pr-2 text-right justify-self-end">
                <p>Max audio quality</p>
                <p className="text-slate-500 ">
                  Atmos available on select titles only
                </p>
              </div>
              <div className="item text-base">Stereo</div>
              <div className="item text-center text-base">Dobly Atmos</div>
              <div className="item text-center text-base">Dobly Atmos</div>
            </div>
            <PlanDurationCost />
            <button
              className="box-border w-full my-8 p-2 text-2xl text-white flex items-center justify-center gap-1  rounded-2xl bg-gradient-to-r from-violet-500 via-purple-900 to-red-700  hover:from-pink-500 hover:to-yellow-500 cursor-pointer border border-transparent hover:border-4 hover:border-slate-50"
              onClick={() => {
                navigate("/login");
              }}
            >
              Continue
              <ChevronRightIcon
                className="h-5 w-5 text-slate-100"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Paywall;
