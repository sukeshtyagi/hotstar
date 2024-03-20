import React, { useState, useEffect } from "react";
import Paywall from "../paywall/Paywall";
import LoginHeader from "./LoginHeader";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [mobNumber, setMobNumber] = useState("");
  const [getOpt, setGetOpt] = useState(false);

  const handleMobNumber = (e) => {
    setMobNumber(e.target.value);
  };

  const validateMobNumber = (mobNumber) => {
    const pattern = /^[1-9][0-9]*$/;
    if (pattern.test(mobNumber) && mobNumber.length === 10) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (validateMobNumber(mobNumber)) {
      setGetOpt(true);
    } else {
      setGetOpt(false);
    }
  }, [mobNumber]);

  return (
    <div className="box-border w-screen h-screen overflow-x-hidden">
      <Paywall />
      <div className="overlay fixed top-0 left-0 w-screen h-screen bg-overlayDense font-serif">
        <div className="outerDiv bg-gray-900 fixed top-16 left-56 w-4/6 h-5/6 rounded-[2rem]">
          <LoginHeader />
          <div className="bodyDiv box-border flex">
            <div className="leftDiv box-border w-2/6 h-full flex flex-col gap-4 ml-8 mt-16">
              <img
                src="/images/common/qr.jpg"
                alt=""
                className="box-border w-1/2 rounded-3xl m-auto"
              />
              <p className="text1 box-border w-80 text-center text-2xl text-slate-100 font-semibold">
                Use Camera App to Scan QR
              </p>
              <p className="text2 box-border w-80 h-auto text-center text-2xl text-gray-500 font-normal m-auto">
                Click on the link generated to redirect to Disney+ Hotstar
                mobile app
              </p>
            </div>

            <div className="centerDiv box-border w-fit h-80 flex flex-col items-center p-2 mt-16 mx-auto">
              <div className="upperDiv box-border w-1 h-36 text-center bg-gradient-to-t  from-slate-100 from-20% via-zinc-900 via-45% to-yellow-400 to-100%"></div>
              <div className="segregationDiv box-border w-5 h-8 bg-transparent text-zinc-100 my-4">
                OR
              </div>
              <div className="lowerDiv box-border w-1 h-36 text-center bg-gradient-to-b  from-slate-100 from-20% via-zinc-900 via-45% to-orange-400 to-100%"></div>
            </div>

            <div className="rightDiv flex flex-col box-border w-1/2 h-full text-zinc-500 p-2 px-12 mt-16">
              <div className="inputFields box-border flex gap-4 relative">
                <input
                  type="text"
                  name=""
                  placeholder="+91"
                  className="box-border w-1/6 h-18 border outline-none rounded-xl text-center text-3xl text-zinc-500 bg-transparent border border-2 border-slate-100 p-2 cursor-not-allowed"
                  style={{ caretColor: "transparent" }}
                />
                <input
                  type="text"
                  name=""
                  value={mobNumber}
                  onChange={handleMobNumber}
                  placeholder="0123456789"
                  maxlength="10" 
                  className="box-border w-5/6 h-18 border outline-none rounded-xl text-left text-3xl text-white p-4 pl-8 cursor-text bg-transparent "
                />
                <p className="mobNumber text-lg text-gray-500 absolute bottom-3/4 right-1/3  px-2 bg-gray-900">
                  Enter mobile number
                </p>
              </div>

              <p className="confirm box-border text-zinc-500 text-lg tracking-tight mt-2">
                By proceeding you confirm that you are above 18 years of age and
                agree to the{" "}
                <span className="box-border text-slate-300 text-lg font-semibold mx-2 tracking-tight">
                  Privacy Policy
                </span>
                &
                <span className="box-border text-slate-300 text-lg font-semibold mx-2 tracking-tight">
                  Terms of Use.
                </span>
              </p>
              {getOpt && (
                <button
                  className="box-border flex items-center justify-center gap-4 p-2 text-2xl text-white w-full h-12 rounded-2xl cursor-pointer mt-28 bg-gradient-to-r from-violet-500 via-purple-900 to-red-700  hover:from-pink-500 hover:to-yellow-500  hover:border-slate-50"
                  onClick={() => {
                    navigate("/login/enter-otp");
                  }}
                >
                  Get OTP
                  <ChevronRightIcon
                    className="h-6 w-6 text-slate-100"
                    aria-hidden="true"
                  />
                </button>
              )}
              <p className="trouble box-border text-zinc-500 text-lg mx-2 tracking-tight mt-">
                Having trouble logging in?
                <span className="trouble box-border text-blue-500 text-lg font-semibold mx-2 tracking-tight">
                  Get Help
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
