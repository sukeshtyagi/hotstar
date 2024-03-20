import React from "react";
import Paywall from "../paywall/Paywall";
import LoginHeader from "./LoginHeader";

function Login() {
  return (
    <div className="box-border w-screen h-screen overflow-x-hidden">
      <Paywall />
      <div className="overlay fixed top-0 left-0 w-screen h-screen bg-overlayDense font-serif">
        <div className="outerDiv bg-gray-900 fixed top-16 left-56 w-4/6 h-5/6 rounded-[2rem]">
          <LoginHeader />
          <div className="bodyDiv box-border flex">
            <div className="leftDiv box-border w-2/5 h-fit flex flex-col gap-4">
              <img
                src="/images/common/qr.jpg"
                alt=""
                className="box-border w-1/2 rounded-3xl m-auto"
              />
              <p className="text1 text-center text-2xl text-slate-100 font-semibold">
                Use Camera App to Scan QR
              </p>
              <p className="text2 box-border w-4/ m-auto text-center text-2xl text-gray-500 font-normal">
                Click on the link generated to redirect to Disney+ Hotstar
                mobile app
              </p>
            </div>

            <div className="centerDiv box-border w-1/5 h-full bg-teal-500">
              <p className="text1">123</p>
            </div>

            <div className="rightDiv box-border w-2/5 h-full bg-red-500">
              <p className="text1">123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
