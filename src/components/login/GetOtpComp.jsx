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
    } else {
      setGetOpt(false);
    }
  }, [mobNumber]);

  return (
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
  );
}

export default GetOtpComp;
