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
    <div className="paywall box-border bg-black w-screen h-fit overflow-x-hidden">
      <div className="headerDiv ">
        <Header />
      </div>
      <div className="mainBody box-border w-screen h-fit flex font-serif mb-20 pt-20 pb-20 border-y-2 border-blue-500">
        <div className="leftDiv box-border h-full w-2/5">
          <h1 className="text-white text-6xl leading-normal p-4 py-24 ">
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

            <div class="item justify-self-start">Max video quality</div>
            <div class="item">
              <p className="text-center">HD</p>
              <p className="text-center">720p</p>
            </div>
            <div class="item">
              <p className="text-center">Full HD</p>
              <p className="text-center">1080p</p>
            </div>
            <div class="item">
              <p className="text-center">4k</p>
              <p className="text-center">2160p</p>
            </div>

            <div class="item justify-self-start">
              <p>Max audio quality</p>
              <p className="text-slate-500 justify-self-start">
                Atmos available on select titles only
              </p>
            </div>
            <div class="item ">Stereo</div>
            <div class="item text-center">Dobly Atmos</div>
            <div class="item text-center">Dobly Atmos</div>
          </div>
          `
          <div className="planPeriodDiv flex w-6/12 h-16   justify-center gap-8 text-slate-900 bg-zinc-500 m-auto py-2 rounded-3xl">
            <div
              className={`quaterly flex items-center justify-start gap-0 cursor-pointer ${
                quaterlyPlanSelected ? "text-white" : ""
              }`}
            >
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
                <CheckIcon className="w-8 text-white-900 text-2xl bg-yellow-500 rounded-full" />
              )}
            </div>

            <div
              className={`yearly flex items-center justify-start gap-0 cursor-pointer ${
                yearlyPlanSelected ? "text-white" : ""
              }`}
            >
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
                <CheckIcon className="w-8 text-white-900 text-2xl bg-orange-500 rounded-full" />
              )}
            </div>

            <div
              className={`monthly flex items-center justify-start gap-0 cursor-pointer ${
                monthlyPlanSelected ? "text-white" : ""
              }`}
            >
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
                <CheckIcon className="w-8 text-white-900 text-2xl bg-green-500 rounded-full" />
              )}
            </div>
          </div>
          <div className="costDiv flex h-fit text-white">
            <div
              className={`mobilePlanCost w-48 h-36 box-border flex flex-col justify-evenly gap-4 items-start border rounded-xl border-zinc-500 border-4 p-2 px-4 cursor-pointer ${
                mobilePlanSelected ? "text-yellow-200" : ""
              }`}
              style={{ userSelect: "none", userDrag: "none" }}
              onClick={() => {
                setMobilePlanSelected(true);
                setSuperPlanSelected(false);
                setPremiumPlanSelected(false);
              }}
            >
              <h3
                className="heading box-border text-4xl font-normal"
                style={{ userSelect: "none", userDrag: "none" }}
              >
                Mobile
              </h3>
              {quaterlyPlanSelected && (
                <p className="cost box-border text-4xl font-bold">
                  <span className="cost box-border text-xl font-thin relative -top-2">
                    &#x20B9;{" "}
                  </span>
                  149
                  <span className="cost box-border text-xl  font-thin">
                    /3 months
                  </span>
                </p>
              )}
              {yearlyPlanSelected && (
                <p className="cost box-border text-4xl font-bold">
                  <span className="cost box-border text-xl font-thin relative -top-2">
                    &#x20B9;{" "}
                  </span>
                  499
                  <span className="cost box-border text-xl  font-thin">
                    /year
                  </span>
                </p>
              )}
              {monthlyPlanSelected && (
                <p className="cost">
                  <span> </span>
                  <span></span>
                </p>
              )}
            </div>

            <div
              className={`superPlanCost w-48 h-36 box-border flex flex-col justify-evenly gap-4 items-start border rounded-xl border-zinc-500 border-4 p-2 px-4 cursor-pointer ${
                monthlyPlanSelected ? "cursor-not-allowed text-zinc-500" : ""
              }`}
              style={{ userSelect: "none", userDrag: "none" }}
              onClick={() => {
                if (!monthlyPlanSelected) {
                  setMobilePlanSelected(false);
                  setSuperPlanSelected(true);
                  setPremiumPlanSelected(false);
                }
              }}
            >
              <h3
                className={`heading box-border text-4xl font-normal ${
                  superPlanSelected ? "cursor-not-allowed text-zinc-500" : ""
                }`}
              >
                Super
              </h3>
              {quaterlyPlanSelected && (
                <p className="cost box-border text-4xl font-bold">
                  <span className="cost box-border text-xl font-thin relative -top-2">
                    &#x20B9;{" "}
                  </span>
                  299
                  <span className="cost box-border text-xl  font-thin">
                    /3 months
                  </span>
                </p>
              )}
              {yearlyPlanSelected && (
                <p className="cost box-border text-4xl font-bold">
                  <span className="cost box-border text-xl font-thin relative -top-2">
                    &#x20B9;{" "}
                  </span>
                  899
                  <span className="cost box-border text-xl  font-thin">
                    /year
                  </span>
                </p>
              )}
              {monthlyPlanSelected && (
                <p className="cost">
                  <span> </span>
                  <span></span>
                </p>
              )}
            </div>

            <div
              className={`premiumPlanCost w-48 h-36 box-border flex flex-col justify-evenly gap-4 items-start border rounded-xl border-zinc-500 border-4 p-2 px-4 cursor-pointer ${
                premiumPlanSelected ? "text-yellow-200" : ""
              }`}
              style={{ userSelect: "none", userDrag: "none" }}
              onClick={() => {
                setMobilePlanSelected(false);
                setSuperPlanSelected(false);
                setPremiumPlanSelected(true);
              }}
            >
              <h3 className="heading box-border text-4xl font-normal">
                Premium
              </h3>

              {quaterlyPlanSelected && (
                <p className="cost box-border text-4xl font-bold">
                  <span className="cost box-border text-xl font-thin relative -top-2">
                    &#x20B9;{" "}
                  </span>
                  499
                  <span className="cost box-border text-xl  font-thin">
                    /3 months
                  </span>
                </p>
              )}
              {yearlyPlanSelected && (
                <p className="cost box-border text-4xl font-bold">
                  <span className="cost box-border text-xl font-thin relative -top-2">
                    &#x20B9;{" "}
                  </span>
                  1499
                  <span className="cost box-border text-xl  font-thin">
                    /year
                  </span>
                </p>
              )}

              {monthlyPlanSelected && (
                <p className="cost box-border text-4xl font-bold">
                  <span className="cost box-border text-xl font-thin relative -top-2">
                    &#x20B9;{" "}
                  </span>
                  299
                  <span className="cost box-border text-xl  font-thin">
                    /month
                  </span>
                </p>
              )}
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
