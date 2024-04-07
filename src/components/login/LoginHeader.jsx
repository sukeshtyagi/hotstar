import React from "react";
import { ChevronDownIcon, XIcon } from "@heroicons/react/outline"; 
import { useNavigate } from "react-router-dom";

function LoginHeader() {
  const navigate = useNavigate()

  return (
    <div className="header box-border w-full h-fit flex flex-col justify-start ">
     
      <div className="icon box-border w-full flex justify-between">
        <p></p>

        <XIcon
          className="box-border w-8 font-thin text-zinc-500 mt-2 mr-10 cursor-pointer "
          onClick={() => {
            navigate("/paywall");
          }}
        />
      </div>

      <div className="text box-border w-full sbp:my-2 flex flex-col gap-1 ">

        <h1 className="heading box-border w-full text-2xl sbp:text-3xl text-center text-slate-100  font-semibold tracking-wider">
          Login or signup to continue
        </h1>

        <p className="para box-border text-center text-gray-500 sbp:text-xl text-base font-medium tracking-wide mx-3">
          Scan QR code or enter phone number to login
        </p>

      </div>
    </div>
  );
}

export default LoginHeader;
