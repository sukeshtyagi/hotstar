import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ArrowLongLeftIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function EnterOtpComp() {
  const navigate = useNavigate();
  const mobNumber = localStorage.getItem("mobNumber");

  const [enterOtp, setEnterOpt] = useState(false);

  const [otpDigits, setOtpDigits] = useState({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOtpDigits((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="rightDiv flex flex-col box-border w-1/2 h-full text-zinc-500 p-2 px-12 mt-16 relative">
      <button className="box-border flex items-center justify-start gap-0 text-2xl text-zinc-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-zinc-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h16"
          />
        </svg>
        Back
      </button>

      <p className="enterOtpPara box-border w-full text-2xl text-slate-50 tracking-wide">
        Enter OTP sent to <span className="text-emerald-500">{mobNumber}</span>
      </p>

      <div className="inputOtpDiv box-border w-full flex justify-start gap-2 p-2">
        <input
          type="number"
          name="digit1"
          value={otpDigits.digit1}
          onChange={handleInputChange}
          className="box-border w-1/6 bg-red-500 text-slate-50 p-2"
        />

        <input
          type="number"
          step="1"
          name="digit2"
          value={otpDigits.digit2}
          onChange={handleInputChange}
          className="box-border w-1/6 bg-red-500 text-slate-50"
        />

        <input
          type="number"
          name="digit3"
          value={otpDigits.digit3}
          onChange={handleInputChange}
          className="box-border w-1/6 bg-red-500 text-slate-50"
        />

        <input
          type="number"
          name="digit4"
          value={otpDigits.digit4}
          onChange={handleInputChange}
          className="box-border w-1/6 bg-red-500 text-slate-50"
        />
      </div>

      <p className="resend">Resend OTP in 00.08</p>

      <div className="resendOptionDiv">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          SMS
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
            />
          </svg>
          Call
        </button>
      </div>

      {enterOtp && (
        <button
          className="box-border flex items-center justify-center gap-4 p-2 text-2xl text-white w-full h-16 rounded-2xl cursor-pointer mt-32 bg-gradient-to-r from-violet-500 via-purple-900 to-red-700"
          onClick={() => {
            navigate("/login/enter-otp");
          }}
        >
          Continue
          <ChevronRightIcon
            className="h-6 w-6 text-slate-100"
            aria-hidden="true"
          />
        </button>
      )}
      <p className="trouble box-border absolute top-20 text-zinc-500 text-lg mx-2 tracking-tight ">
        Having trouble logging in?
        <span className="trouble box-border text-blue-500 text-lg font-semibold mx-2 tracking-tight">
          Get Help
        </span>
      </p>
    </div>
  );
}

export default EnterOtpComp;
