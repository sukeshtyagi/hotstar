import React, { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/outline";

function PlanDurationCost() {
  const [quaterlyPlanSelected, setQuaterlyPlanSelected] = useState(false);
  const [yearlyPlanSelected, setYearlyPlanSelected] = useState(false);
  const [monthlyPlanSelected, setMonthlyPlanSelected] = useState(false);

  const [mobilePlanSelected, setMobilePlanSelected] = useState(false);
  const [superPlanSelected, setSuperPlanSelected] = useState(false);
  const [premiumPlanSelected, setPremiumPlanSelected] = useState(false);

  useEffect(() => {
    setQuaterlyPlanSelected(true);
    setMobilePlanSelected(true);
  }, []);

  useEffect(() => {
    if (monthlyPlanSelected) {
      setPremiumPlanSelected(true);
    }
  }, [monthlyPlanSelected]);

  const monthlyHandle = () => {
    setQuaterlyPlanSelected(false);
    setYearlyPlanSelected(false);
    setMonthlyPlanSelected(true);

    setMobilePlanSelected(false);
    setSuperPlanSelected(false);
    setPremiumPlanSelected(true);
  };
  return (
    <>
      <div className="planPeriodDiv flex w-6/12 h-16   justify-center gap-8 text-slate-900 bg-zinc-500 m-auto py-2 rounded-3xl">
        <div
          className={`quaterly flex items-center justify-start gap-1 cursor-pointer ${
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
          className={`yearly flex items-center justify-start gap-1 cursor-pointer ${
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
          className={`monthly flex items-center justify-start gap-1 cursor-pointer ${
            monthlyPlanSelected ? "text-white" : ""
          }`}
        >
          <p
            className="box-border text-3xl"
            style={{ userSelect: "none", userDrag: "none" }}
            onClick={monthlyHandle}
          >
            Monthly
          </p>
          {monthlyPlanSelected && (
            <CheckIcon className="w-8 text-white-900 text-2xl bg-green-500 rounded-full" />
          )}
        </div>
      </div>

      <div className="costDiv flex justify-evenly h-fit text-white">
        <div
          className={`mobilePlanCost w-56 h-28 box-border flex flex-col justify-evenly gap-1 items-start border rounded-xl border-4 p-2 px-4 cursor-pointer ${
            monthlyPlanSelected ? "cursor-not-allowed" : ""
          }
              ${mobilePlanSelected ? "border-slate-50" : "border-zinc-500"}`}
          style={{ userSelect: "none", userDrag: "none" }}
          onClick={() => {
            if (!monthlyPlanSelected) {
              setMobilePlanSelected(true);
              setSuperPlanSelected(false);
              setPremiumPlanSelected(false);
            }
          }}
        >
          <h3
            className={`heading box-border text-4xl font-normal ${
              mobilePlanSelected ? "text-yellow-200 text-white" : ""
            }
                ${monthlyPlanSelected ? "text-zinc-500" : ""}
                `}
          >
            Mobile
          </h3>
          {mobilePlanSelected && (
            <div className="relative">
              <CheckIcon className=" absolute bottom-[.6rem] left-32 w-6 h-6 text-white-900 text-2xl bg-pink-500 rounded-full" />
            </div>
          )}
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
              <span className="cost box-border text-xl  font-thin">/year</span>
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
          className={`superPlanCost w-56 h-28 box-border flex flex-col justify-evenly gap-1 items-start border rounded-xl border-4 p-2 px-4 cursor-pointer 
          ${monthlyPlanSelected ? "cursor-not-allowed" : ""}
          ${superPlanSelected ? "border-slate-50" : "border-zinc-500"}`}
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
              superPlanSelected ? "text-yellow-200 text-white" : ""
            }
                ${monthlyPlanSelected ? "text-zinc-500" : ""}
                `}
          >
            Super
          </h3>

          {superPlanSelected && (
            <div className="relative">
              <CheckIcon className=" absolute bottom-[0.5rem] left-28 w-6 h-6 text-white-900 text-2xl bg-cyan-500 rounded-full" />
            </div>
          )}
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
              <span className="cost box-border text-xl  font-thin">/year</span>
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
          className={`premiumPlanCost w-56 h-28 box-border flex flex-col justify-evenly gap-1 items-start border rounded-xl  border-4 p-2
               px-4 cursor-pointer ${
                 premiumPlanSelected ? "border-slate-50" : "border-zinc-500"
               }`}
          style={{ userSelect: "none", userDrag: "none" }}
          onClick={() => {
            setMobilePlanSelected(false);
            setSuperPlanSelected(false);
            setPremiumPlanSelected(true);
          }}
        >
          <h3
            className={`heading box-border text-4xl font-normal ${
              monthlyPlanSelected ? "text-yellow-200" : ""
            }
            ${premiumPlanSelected ? "text-yellow-200 text-white" : ""}
                
                `}
          >
            Premium
          </h3>

          {premiumPlanSelected && (
            <div className="relative">
              <CheckIcon className=" absolute bottom-[0.5rem] left-36 w-6 h-6 text-white-900 text-2xl bg-rose-600 rounded-full" />
            </div>
          )}

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
              <span className="cost box-border text-xl  font-thin">/year</span>
            </p>
          )}

          {monthlyPlanSelected && (
            <p className="cost box-border text-4xl font-bold">
              <span className="cost box-border text-xl font-thin relative -top-2">
                &#x20B9;{" "}
              </span>
              299
              <span className="cost box-border text-xl  font-thin">/month</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default PlanDurationCost;
