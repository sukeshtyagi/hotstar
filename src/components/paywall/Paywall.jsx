import React, { useState } from "react";
import Header from "./Header";
import Footer from "../sharedComponents/Footer";
import { CheckIcon, XIcon, ChevronRightIcon } from "@heroicons/react/outline";
import PlanDurationCost from "./PlanDurationCost";
import { useNavigate } from "react-router-dom";

function Paywall() {
  const navigate = useNavigate();
  const [mobilePlanSelected, setMobilePlanSelected] = useState(false);

  return (
    <div className="paywall box-border bg-black w-screen h-fit overflow-x-hidden">
      <div className="headerDiv border-box w-screen bg-black">
        <Header />
      </div>
      <div className="mainBody box-border w-screen h-fit flex font-serif mb-20 pt-20 pb-20 border-y-2 border-blue-500">
        <div className="leftDiv box-border h-full w-2/5 pl-6 pt-12">
          <h1 className="text-emerald-500 text-6xl leading-normal p-4 py-24 ">
            Subscribe now and start streaming
          </h1>
          {mobilePlanSelected && (
            <p className="box-border h-fit w-3/4 text-yellow-200 text-2xl text-left p-4 m-auto">
              You will be able to watch only on mobile app
            </p>
          )}
        </div>
        <div className="rightDiv  box-border h-fit w-8/12 flex flex-col gap-12 pr-12 font-white overflow-x-hidden">
          <div className="planContainer box-border h-full grid grid-cols-[3.5fr,1fr,1fr,1fr] gap-10 bg-black text-white text-2xl font-serif items-center justify-items-center">
            <div className="item"></div>
            <div className="item font-bold text-3xl">Mobile</div>
            <div className="item font-bold text-3xl">Super</div>
            <div className="item font-bold text-3xl">Premium</div>

            <div className="item justify-self-start">
              <p>All content </p>
              <p className="item text-slate-500">Movies,Live Sports,TV,Specials</p>
            </div>

            <div className="item">
              <CheckIcon className="h-10 text-green-500 justify-items-center" />
            </div>
            <div className="item">
              <CheckIcon className="h-10 text-green-500 justify-items-center" />
            </div>
            <div className="item text-center	">
              <CheckIcon className="h-10 text-green-500 text-center" />
            </div>

            <div className="item justify-self-start">Watch on Tv or Laptop</div>
            <div className="item">
              <XIcon className="h-10 text-red-500" />
            </div>
            <div className="item">
              <CheckIcon className="h-10 text-green-500" />
            </div>
            <div className="item">
              <CheckIcon className="h-10 text-green-500" />
            </div>

            <div className="item justify-self-start">
              Add free movies & shoes(except sports)
            </div>
            <div className="item">
              <XIcon className="h-10 text-red-500" />
            </div>
            <div className="item">
              <XIcon className="h-10 text-red-500" />
            </div>
            <div className="item">
              <CheckIcon className="h-10 text-green-500" />
            </div>

            <div className="item justify-self-start">
              Number of devices that can be logged in
            </div>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">4</div>

            <div className="item justify-self-start">Max video quality</div>
            <div className="item">
              <p className="text-center">HD</p>
              <p className="text-center">720p</p>
            </div>
            <div className="item">
              <p className="text-center">Full HD</p>
              <p className="text-center">1080p</p>
            </div>
            <div className="item">
              <p className="text-center">4k</p>
              <p className="text-center">2160p</p>
            </div>

            <div className="item justify-self-start">
              <p>Max audio quality</p>
              <p className="text-slate-500 justify-self-start">
                Atmos available on select titles only
              </p>
            </div>
            <div className="item ">Stereo</div>
            <div className="item text-center">Dobly Atmos</div>
            <div className="item text-center">Dobly Atmos</div>
          </div>
          <PlanDurationCost mobilePlanSelected2={mobilePlanSelected} />
          <button
            className="box-border flex items-center justify-center gap-4 p-2 text-3xl text-white w-full h-16 rounded-2xl bg-gradient-to-r from-violet-500 via-purple-900 to-red-700  hover:from-pink-500 hover:to-yellow-500 cursor-pointer border border-transparent hover:border-4 hover:border-slate-50"
            onClick={() => {
              navigate("/login");
            }}
          >
            Continue
            <ChevronRightIcon
              className="h-8 w-8 text-slate-100"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Paywall;
