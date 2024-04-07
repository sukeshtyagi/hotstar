import React from "react";
import Paywall from "../paywall/Paywall";
import LoginHeader from "./LoginHeader";
import GetOtpComp from "./GetOtpComp";
import EnterOtpComp from "./EnterOtpComp";

function Login({ child }) {
  return (
    <div className="outerContainer box-border w-screen h-screen overflow-x-hidden">
      <Paywall />
      <div className="overlay box-border w-screen h-screen fixed top-0 left-0 bg-overlayDense font-serif">
        <div
          className="outerDiv box-border w-full otpbp:h-[490px]  
        otpbp:w-[450px]  mx-auto  rounded-[2rem] bg-gray-900"
        >
          <LoginHeader />

          <div className="bodyDiv box-border w-full flex flex-col items-start gap-2">
            <div className="leftDiv box-border w-full h-full flex flex-col items-start gap-0 p-1">
              <div className="imageDiv box-border w-full h-1/2 mx-auto flex justify-center p-2 object-contain">
                <img
                  src="/images/common/qr.jpg"
                  alt=""
                  className="box-border w-1/2  object-contain h-24"
                />
              </div>

              <p className="text1 box-border  w-full h-auto text-center text-base text-slate-100 font-semibold m-auto">
                Use Camera App to Scan QR
              </p>

              <p className="text2 box-border w-full h-auto text-center text-base text-gray-500 font-normal m-auto">
                Click on the link generated to redirect to Disney+ Hotstar
                mobile app
              </p>
            </div>

            <div className="centerDiv box-border w-2/3 h-2 flex justify-center items-center p-2 mt-0 mx-auto">
              <div className="upperDiv box-border w-1/2 h-1 text-center bg-gradient-to-t  from-slate-100 from-20% via-zinc-900 via-45% to-100%"></div>
              <div className="segregationDiv box-border w-5 h-8 mx-3 text-zinc-100 my-4">
                <p className="relative top-2">OR</p>
              </div>
              <div className="lowerDiv box-border w-1/2 h-1 text-center bg-gradient-to-t  from-slate-100 from-20% via-zinc-900 via-45% to-100%"></div>
            </div>
            {child === "getOtp" && <GetOtpComp />}
            {child === "enterOtp" && <EnterOtpComp />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
