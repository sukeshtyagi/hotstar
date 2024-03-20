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
        </div>
      </div>
    </div>
  );
}

export default Login;
