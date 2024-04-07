import React, { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function GetOtpComp() {
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
      localStorage.setItem("mobNumber", `+91${mobNumber}`);
    } else {
      setGetOpt(false);
    }
  }, [mobNumber]);

  return (
    <div className="rightDiv box-border w-full flex flex-col  h-full text-zinc-500 p-0 px-0 mt-6 ">
      <div className="inputFields box-border w-11/12 h-12 mx-auto flex gap-4 ">
        <input
          type="text"
          name=""
          placeholder="+91"
          className="box-border w-1/6 border outline-none rounded-xl text-center text-lg text-zinc-500 bg-transparent border border-slate-100 cursor-not-allowed"
          style={{ caretColor: "transparent" }}
        />

        <div className="mobNum box-border w-5/6 border border-white flex flex-col justify-end rounded-xl  relative">
          <input
            type="text"
            name=""
            value={mobNumber}
            onChange={handleMobNumber}
            placeholder="0123456789"
            maxlength="10"
            className="box-border w-full  outline-none rounded-xl text-left text-lg text-white p-1 pl-8 bg-gray-900"
          />
          <p className="mobNumber box-border w-fit text-md text-slate-50 absolute bottom-9 left-3  px-2 bg-gray-900">
            Enter mobile number
          </p>
        </div>
      </div>

      <p className="confirm box-border text-zinc-500 text-md text-center tracking-tight mt-2 px-4">
        By proceeding you confirm that you are above 18 years of age and agree
        to the{" "}
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
          className="box-border w-4/5 flex items-center justify-center gap-4 p-2 text-xl text-white w-full rounded-2xl cursor-pointer mt-36 bg-gradient-to-r from-violet-500 via-purple-900 to-red-700  hover:from-pink-500 hover:to-yellow-500  hover:border-slate-50"
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
      <p
        className={`trouble box-border text-zinc-500 text-center text-lg mx-4 tracking-tight mb-2 ${
          getOpt ? "mt-0" : "mt-36"
        }`}
      >
        Having trouble logging in?
        <span className="trouble box-border text-blue-500 text-base font-semibold mx-2 tracking-tight">
          Get Help
        </span>
      </p>
    </div>
  );
}

export default GetOtpComp;
