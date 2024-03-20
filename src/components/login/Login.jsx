import React, { useState, useEffect } from "react";
import Paywall from "../paywall/Paywall";
import LoginHeader from "./LoginHeader";
import GetOtpComp from "./GetOtpComp";

function Login({ getOtp }) {
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
            {getOtp && <GetOtpComp />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

/*
{ getOtp, getOtpComp, enterOtp, enterOtpComp }

const RightDivGetOtp = { getOtpComp };
{enterOtp && <RightDivEnterOtp />}

const RightDivEnterOtp = { enterOtpComp };
*/
