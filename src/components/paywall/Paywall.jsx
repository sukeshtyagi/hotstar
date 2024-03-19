import React, { useState } from "react";
import Header from "./Header";
import Footer from "../sharedComponents/Footer";
import { CheckIcon, XIcon, CheckCircleIcon } from "@heroicons/react/outline";

function Paywall() {
  const [mobilePlanSelected, setMobilePlanSelected] = useState(false);
  const [superPlanSelected, setSuperPlanSelected] = useState(false);
  const [premiumPlanSelected, setPremiumPlanSelected] = useState(false);
  const [quaterlyPlanSelected, setQuaterlyPlanSelected] = useState(false);
  const [yearlyPlanSelected, setYearlyPlanSelected] = useState(false);
  const [monthlyPlanSelected, setMonthlyPlanSelected] = useState(false);

  return (
    <div className="paywall box-border bg-black w-screen h-fit overflow-x-hidden ">
      <div className="headerDiv ">
        <Header />
      </div>
      <div className="mainBody box-border h-fit flex font-serif">
        <div className="leftDiv box-border h-full w-2/5">
          <h1 className="text-white text-6xl leading-normal p-4 py-24">
            Subscribe now and start streaming
          </h1>
          {mobilePlanSelected && (
            <p>You will be able to watch only on mobile app</p>
          )}
        </div>
        <div className="rightDiv  box-border h-fit w-8/12 flex flex-col gap-12 pr-12 font-white">
          <div className="planContainer box-border h-full grid grid-cols-[3.5fr,1fr,1fr,1fr] gap-10 bg-black text-white text-2xl font-serif items-center justify-items-center	">
            <div class="item"></div>
            <div class="item font-bold text-3xl">Mobile</div>
            <div class="item font-bold text-3xl">Super</div>
            <div class="item font-bold text-3xl">Premium</div>

            <div class="item justify-self-start">
              <p>All content </p>
              <p class="item text-slate-500">Movies,Live Sports,TV,Specials</p>
            </div>

            <div class="item">
              <CheckIcon className="h-10 text-green-500 justify-items-center" />
            </div>
            <div class="item">
              <CheckIcon className="h-10 text-green-500 justify-items-center" />
            </div>
            <div class="item text-center	">
              <CheckIcon className="h-10 text-green-500 text-center" />
            </div>

            <div class="item justify-self-start">Watch on Tv or Laptop</div>
            <div class="item">
              <XIcon className="h-10 text-red-500" />
            </div>
            <div class="item">
              <CheckIcon className="h-10 text-green-500" />
            </div>
            <div class="item">
              <CheckIcon className="h-10 text-green-500" />
            </div>

            <div class="item justify-self-start">
              Add free movies & shoes(except sports)
            </div>
            <div class="item">
              <XIcon className="h-10 text-red-500" />
            </div>
            <div class="item">
              <XIcon className="h-10 text-red-500" />
            </div>
            <div class="item">
              <CheckIcon className="h-10 text-green-500" />
            </div>

            <div class="item justify-self-start">
              Number of devices that can be logged in
            </div>
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">4</div>

            <div class="item justify-self-start justify-self-start">
              Max video quality
            </div>
            <div class="item">
              <p>HD</p>
              <p>720p</p>
            </div>
            <div class="item">
              <p>Full HD</p>
              <p>1080p</p>
            </div>
            <div class="item">
              <p>4k</p>
              <p>2160p</p>
            </div>

            <div class="item justify-self-start">
              <p>Max audio quality</p>
              <p className="text-slate-500 justify-self-start">
                Atmos available on select titles only
              </p>
            </div>
            <div class="item">Stereo</div>
            <div class="item">Dobly Atmos</div>
            <div class="item">Dobly Atmos</div>
          </div>

          <div className="planPeriodDiv flex w-6/12 h-16   justify-center gap-8 text-white bg-zinc-500 m-auto py-2 rounded-3xl">
            <div className="quaterly flex items-center justify-start gap-0 ">
              <div
                className="box-border text-3xl cursor-pointer"
                style={{ userSelect: "none", userDrag: "none" }}
                onClick={() => {
                  setQuaterlyPlanSelected(true);
                  setYearlyPlanSelected(false);
                  setMonthlyPlanSelected(false);
                }}
              >
                Quaterly
              </div>
              {quaterlyPlanSelected && (
                <CheckIcon className="w-8 text-white-900 text-2xl bg-purple-500 rounded-full" />
              )}
            </div>

            <div className="yearly flex items-center justify-start gap-0 cursor-pointer">
              <p
                className="box-border text-3xl"
                style={{ userSelect: "none", userDrag: "none" }}
                onClick={() => {
                  setQuaterlyPlanSelected(false);
                  setYearlyPlanSelected(true);
                  setMonthlyPlanSelected(false);
                }}
              >
                Yearly
              </p>
              {yearlyPlanSelected && (
                <CheckIcon className="w-8 text-white-900 text-2xl bg-purple-500 rounded-full" />
              )}
            </div>

            <div className="monthly flex items-center justify-start gap-0 cursor-pointer">
              <p
                className="box-border text-3xl"
                style={{ userSelect: "none", userDrag: "none" }}
                onClick={() => {
                  setQuaterlyPlanSelected(false);
                  setYearlyPlanSelected(false);
                  setMonthlyPlanSelected(true);
                }}
              >
                Monthly
              </p>
              {monthlyPlanSelected && (
                <CheckIcon className="w-8 text-white-900 text-2xl bg-purple-500 rounded-full" />
              )}
            </div>
          </div>

          <div className="costDiv flex h-fit text-white">
            <div className="mobileCost">
              <h3 className="heading">Mobile</h3>
              <p className="cost">cost</p>
            </div>
            <div className="superCost">
              <h3 className="heading">Super</h3>
              <p className="cost">cost</p>
            </div>
            <div className="premiumCost">
              <h3 className="heading">Premium</h3>
              <p className="cost">cost</p>
            </div>
          </div>

          <button className="text-white">continue</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Paywall;
